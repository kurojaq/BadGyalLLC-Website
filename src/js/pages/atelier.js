/**
 * Digital Atelier / 3D Studio Page
 */

import { NailAtelier } from '../engine/three-d-engine.js';

let atelier3d = null;

export function loadAtelierPage(outlet) {
  outlet.innerHTML = `
    <section class="section" style="padding: 0; min-height: 100vh;">
      <div class="container" style="display: grid; grid-template-columns: 1fr 400px; gap: var(--space-4); height: calc(100vh - 80px); max-width: 1400px; padding: var(--space-4);">

        <!-- 3D Viewport -->
        <div id="atelier-viewport" style="
          background: linear-gradient(135deg, var(--color-bg-secondary) 0%, var(--color-bg-primary) 100%);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-border-light);
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          position: relative;
        ">
          <!-- 3D Canvas will be inserted here -->
        </div>

        <!-- Control Panel -->
        <div class="atelier-controls" style="
          background: var(--color-bg-primary);
          border: 1px solid var(--color-border-light);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          overflow-y: auto;
          max-height: calc(100vh - 140px);
          display: flex;
          flex-direction: column;
        ">
          <h2 class="heading-4" style="margin-bottom: var(--space-4);">Customize</h2>

          <!-- Service Type -->
          <div class="control-group">
            <label class="control-label">Service Type</label>
            <select class="form-control" id="service-type">
              <option value="manicure">Manicure</option>
              <option value="pedicure">Pedicure</option>
              <option value="extensions">Extensions</option>
              <option value="art">Nail Art</option>
            </select>
          </div>

          <!-- Nail Shape -->
          <div class="control-group">
            <label class="control-label">Shape</label>
            <div style="display: flex; gap: var(--space-2); flex-wrap: wrap;">
              <button class="btn btn-secondary btn-sm" data-shape="oval" style="flex: 1;">Oval</button>
              <button class="btn btn-secondary btn-sm" data-shape="almond" style="flex: 1;">Almond</button>
              <button class="btn btn-secondary btn-sm" data-shape="square" style="flex: 1;">Square</button>
            </div>
          </div>

          <!-- Length Control -->
          <div class="control-group">
            <label class="control-label">
              Length
              <span id="length-value" style="color: var(--color-accent-600); font-weight: bold;">60%</span>
            </label>
            <input
              type="range"
              class="form-control"
              id="length-slider"
              min="0"
              max="100"
              value="60"
              style="cursor: pointer;"
            >
          </div>

          <!-- Color Picker -->
          <div class="control-group">
            <label class="control-label">Color</label>
            <div style="display: flex; gap: var(--space-2); align-items: center;">
              <input
                type="color"
                class="form-control"
                id="color-picker"
                value="#c9a961"
                style="flex: 1; height: 44px; cursor: pointer;"
              >
              <span id="color-hex" class="label" style="min-width: 60px;">#c9a961</span>
            </div>
          </div>

          <!-- Finish -->
          <div class="control-group">
            <label class="control-label">Finish</label>
            <select class="form-control" id="finish-select">
              <option value="gloss">Gloss</option>
              <option value="matte">Matte</option>
              <option value="chrome">Chrome</option>
              <option value="metallic">Metallic</option>
              <option value="holographic">Holographic</option>
            </select>
          </div>

          <!-- Embellishments -->
          <div class="control-group">
            <label class="control-label">Add-ons</label>
            <div style="display: flex; flex-direction: column; gap: var(--space-2);">
              <label style="display: flex; align-items: center; gap: var(--space-2); cursor: pointer;">
                <input type="checkbox" id="gems-check">
                <span>Gems & Stones</span>
              </label>
              <label style="display: flex; align-items: center; gap: var(--space-2); cursor: pointer;">
                <input type="checkbox" id="chains-check">
                <span>Chains & Metal</span>
              </label>
              <label style="display: flex; align-items: center; gap: var(--space-2); cursor: pointer;">
                <input type="checkbox" id="art-check">
                <span>Custom Art</span>
              </label>
            </div>
          </div>

          <!-- Summary -->
          <div class="card" style="
            background-color: var(--color-accent-100);
            border-color: var(--color-accent-600);
            margin-top: auto;
            margin-bottom: var(--space-4);
          ">
            <h4 class="label" style="color: var(--color-accent-900); margin-bottom: var(--space-2);">ESTIMATED</h4>
            <div style="display: flex; justify-content: space-between; margin-bottom: var(--space-3);">
              <span class="body-sm" style="color: var(--color-accent-800);">Service Duration:</span>
              <span class="body-sm" style="color: var(--color-accent-900); font-weight: bold;">90 min</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span class="body-sm" style="color: var(--color-accent-800);">Base Price:</span>
              <span class="heading-6" style="color: var(--color-accent-900);">$95</span>
            </div>
          </div>

          <!-- CTA -->
          <a href="/booking" class="btn btn-accent btn-lg btn-block">Book This Design</a>
        </div>
      </div>
    </section>

    <!-- Responsive fallback for mobile -->
    <style>
      @media (max-width: 1024px) {
        .container {
          grid-template-columns: 1fr !important;
          height: auto !important;
        }

        #atelier-viewport {
          min-height: 500px !important;
        }

        .atelier-controls {
          max-height: none !important;
        }
      }
    </style>
  `;

  // Initialize 3D engine after DOM is ready
  setTimeout(() => {
    const viewportElement = document.getElementById('atelier-viewport');
    if (viewportElement) {
      atelier3d = new NailAtelier(viewportElement);
      setupAtelierControls();
    }
  }, 100);
}

function setupAtelierControls() {
  if (!atelier3d) return;

  // Length slider
  const lengthSlider = document.getElementById('length-slider');
  const lengthValue = document.getElementById('length-value');
  if (lengthSlider) {
    lengthSlider.addEventListener('input', (e) => {
      const value = parseInt(e.target.value) / 100;
      atelier3d.updateLength(value);
      lengthValue.textContent = e.target.value + '%';
    });
  }

  // Color picker
  const colorPicker = document.getElementById('color-picker');
  const colorHex = document.getElementById('color-hex');
  if (colorPicker) {
    colorPicker.addEventListener('input', (e) => {
      atelier3d.updateColor(e.target.value);
      colorHex.textContent = e.target.value;
    });
  }

  // Finish select
  const finishSelect = document.getElementById('finish-select');
  if (finishSelect) {
    finishSelect.addEventListener('change', (e) => {
      atelier3d.updateFinish(e.target.value);
    });
  }

  // Shape buttons
  document.querySelectorAll('[data-shape]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      document.querySelectorAll('[data-shape]').forEach(b => b.classList.remove('btn-primary'));
      document.querySelectorAll('[data-shape]').forEach(b => b.classList.add('btn-secondary'));
      e.target.classList.remove('btn-secondary');
      e.target.classList.add('btn-primary');
      atelier3d.customization.shape = e.target.dataset.shape;
    });
  });

  // Set first shape button as active
  const firstShapeBtn = document.querySelector('[data-shape]');
  if (firstShapeBtn) {
    firstShapeBtn.classList.remove('btn-secondary');
    firstShapeBtn.classList.add('btn-primary');
  }
}
