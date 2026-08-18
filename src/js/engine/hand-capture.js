/**
 * Guided hand capture using MediaPipe's on-device Hand Landmarker.
 *
 * This module intentionally returns a profile payload rather than pretending
 * that 21 landmarks are a finished personalized mesh. A reconstruction service
 * can consume the same payload later without changing the capture experience.
 */

const WASM_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/wasm';
const VISION_MODULE_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.22/vision_bundle.mjs';
const MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';

export function setupHandCapture({ trigger, status, onCapture }) {
  if (!trigger || !status) return () => {};

  let dialog = null;
  let stream = null;
  let landmarker = null;
  let animationFrame = null;
  let latestResult = null;

  const setStatus = (message, tone = 'default') => {
    status.textContent = message;
    status.dataset.tone = tone;
  };

  const stop = () => {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    animationFrame = null;
    stream?.getTracks().forEach((track) => track.stop());
    stream = null;
    landmarker?.close();
    landmarker = null;
    latestResult = null;
  };

  const close = () => {
    stop();
    dialog?.close();
  };

  const drawLandmarks = (canvas, video, result) => {
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.clearRect(0, 0, canvas.width, canvas.height);

    const landmarks = result?.landmarks?.[0];
    if (!landmarks) return;

    context.fillStyle = '#ff168f';
    context.strokeStyle = '#ffffff';
    context.lineWidth = Math.max(2, canvas.width / 420);

    for (const point of landmarks) {
      context.beginPath();
      context.arc(point.x * canvas.width, point.y * canvas.height, Math.max(3, canvas.width / 160), 0, Math.PI * 2);
      context.fill();
      context.stroke();
    }
  };

  const runDetection = (video, canvas) => {
    if (!landmarker || video.readyState < 2) return;

    latestResult = landmarker.detectForVideo(video, performance.now());
    drawLandmarks(canvas, video, latestResult);

    if (latestResult?.landmarks?.length) {
      setStatus('Hand detected — keep your palm steady.', 'ready');
    } else {
      setStatus('Place one open hand inside the frame.', 'default');
    }

    animationFrame = requestAnimationFrame(() => runDetection(video, canvas));
  };

  const open = async () => {
    if (!dialog) {
      dialog = document.createElement('dialog');
      dialog.className = 'hand-capture-dialog';
      dialog.innerHTML = `
        <div class="hand-capture-dialog__inner">
          <div class="hand-capture-dialog__header">
            <div>
              <p class="eyebrow">Personal hand profile</p>
              <h2 class="heading-3">Show us your hand.</h2>
            </div>
            <button type="button" class="btn btn-secondary btn-sm" data-capture-close>Close</button>
          </div>
          <p class="body-sm hand-capture-dialog__help">Use even lighting, keep your palm facing the camera, and spread your fingers slightly.</p>
          <div class="hand-capture-stage">
            <video autoplay muted playsinline></video>
            <canvas aria-hidden="true"></canvas>
            <div class="hand-capture-stage__guide">ALIGN PALM INSIDE FRAME</div>
          </div>
          <div class="hand-capture-dialog__footer">
            <p class="body-sm" data-capture-live-status>Preparing camera…</p>
            <button type="button" class="btn btn-primary btn-lg" data-capture-confirm disabled>Capture hand profile</button>
          </div>
        </div>
      `;
      document.body.appendChild(dialog);
      dialog.querySelector('[data-capture-close]').addEventListener('click', close);
      dialog.addEventListener('cancel', close);
      dialog.addEventListener('close', stop);
    }

    const video = dialog.querySelector('video');
    const canvas = dialog.querySelector('canvas');
    const liveStatus = dialog.querySelector('[data-capture-live-status]');
    const confirm = dialog.querySelector('[data-capture-confirm]');
    confirm.disabled = true;
    dialog.showModal();
    setStatus('Opening camera…', 'default');
    liveStatus.textContent = 'Loading hand tracking…';

    try {
      // Keep the heavy vision runtime outside the Vite graph. The Atelier is
      // already lazy-loaded, and this keeps the public build lightweight.
      const { FilesetResolver, HandLandmarker } = await import(/* @vite-ignore */ VISION_MODULE_URL);

      const vision = await FilesetResolver.forVisionTasks(WASM_URL);
      landmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: { modelAssetPath: MODEL_URL, delegate: 'GPU' },
        runningMode: 'VIDEO',
        numHands: 1,
        minHandDetectionConfidence: 0.65,
        minHandPresenceConfidence: 0.65,
        minTrackingConfidence: 0.65,
      });

      stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 960 } },
        audio: false,
      });
      video.srcObject = stream;
      await video.play();
      runDetection(video, canvas);

      confirm.disabled = false;
      confirm.addEventListener('click', () => {
        if (!latestResult?.landmarks?.[0]) return;
        const profile = {
          capturedAt: new Date().toISOString(),
          handedness: latestResult.handedness?.[0]?.[0]?.categoryName || null,
          landmarks: latestResult.landmarks[0],
          worldLandmarks: latestResult.worldLandmarks?.[0] || [],
        };
        onCapture?.(profile);
        setStatus('Hand profile captured.', 'ready');
        close();
      }, { once: true });
    } catch (error) {
      console.error('[hand-capture] unable to initialize', error);
      liveStatus.textContent = 'Camera access or hand tracking is unavailable.';
      setStatus('Capture unavailable — you can continue with the studio hand.', 'error');
    }
  };

  trigger.addEventListener('click', open);
  return close;
}
