/**
 * 3D Engine - Three.js Integration
 * Handles 3D scene setup, nail geometry, materials, and rendering
 */

import * as THREE from 'three';
import { createProceduralHand } from './hand-model.js';
import { createNailGeometry, isNailShape } from './nail-geometry.js';

class NailAtelier {
  constructor(containerElement) {
    this.container = containerElement;
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.nails = [];
    this.handModel = null;
    this.light = null;
    this.customization = {
      color: '#ff168f',
      finish: 'gloss',
      shape: 'oval',
      length: 0.6,
      gems: false,
    };

    this.init();
  }

  init() {
    this.setupScene();
    this.setupCamera();
    this.setupRenderer();
    this.setupLighting();
    this.createHand();
    this.setupControls();
    this.animate();
  }

  setupScene() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xf9f9f9);
  }

  setupCamera() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.set(0, 0.5, 2.5);
    this.camera.lookAt(0, 0, 0);
  }

  setupRenderer() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.shadowMap.enabled = true;
    this.container.appendChild(this.renderer.domElement);

    // Handle resize
    window.addEventListener('resize', () => this.onWindowResize());
  }

  setupLighting() {
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    this.scene.add(ambientLight);

    // Main directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    this.scene.add(directionalLight);

    // Fill light
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-5, 2, 5);
    this.scene.add(fillLight);
  }

  createHand() {
    const model = createProceduralHand();
    this.handModel = model.hand;
    this.scene.add(this.handModel);
    this.createNails(model.anchors);
  }

  createNails(anchors) {
    anchors.forEach((pos) => {
      const nail = this.createNail(pos);
      this.nails.push({ mesh: nail, position: pos });
    });
  }

  createNail(position) {
    const length = 0.34 + this.customization.length * 0.42;
    const geometry = createNailGeometry({
      width: position.width,
      length,
      shape: this.customization.shape,
    });
    // Create material based on finish
    const material = this.createNailMaterial();

    const nail = new THREE.Mesh(geometry, material);
    if (position.anchor) {
      position.anchor.add(nail);
      nail.position.copy(position.nailOffset);
    } else {
      nail.position.set(position.x, position.y, 0.2);
    }
    nail.castShadow = true;
    nail.receiveShadow = true;

    return nail;
  }

  createNailMaterial() {
    const color = new THREE.Color(this.customization.color);

    switch (this.customization.finish) {
      case 'gloss':
        return new THREE.MeshStandardMaterial({
          color,
          metalness: 0.3,
          roughness: 0.2,
        });
      case 'matte':
        return new THREE.MeshStandardMaterial({
          color,
          metalness: 0,
          roughness: 0.9,
        });
      case 'chrome':
        return new THREE.MeshStandardMaterial({
          color: 0xc0c0c0,
          metalness: 1,
          roughness: 0.1,
        });
      case 'metallic':
        return new THREE.MeshStandardMaterial({
          color: color.clone().multiplyScalar(0.8),
          metalness: 0.8,
          roughness: 0.3,
        });
      case 'holographic':
        return new THREE.MeshStandardMaterial({
          color: new THREE.Color().setHSL(Math.random(), 1, 0.5),
          metalness: 0.5,
          roughness: 0.4,
        });
      default:
        return new THREE.MeshStandardMaterial({ color });
    }
  }

  setupControls() {
    // Mouse orbit controls
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    this.renderer.domElement.addEventListener('mousedown', (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    this.renderer.domElement.addEventListener('mousemove', (e) => {
      if (isDragging) {
        const deltaX = e.clientX - previousMousePosition.x;
        const deltaY = e.clientY - previousMousePosition.y;

        // Rotate nails around Y axis
        this.nails.forEach((nail) => {
          nail.mesh.rotation.y += deltaX * 0.005;
          nail.mesh.rotation.x += deltaY * 0.005;
        });
        this.render();

        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    this.renderer.domElement.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Touch controls for mobile
    this.renderer.domElement.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      const deltaX = touch.clientX - previousMousePosition.x;
      const deltaY = touch.clientY - previousMousePosition.y;

      this.nails.forEach((nail) => {
        nail.mesh.rotation.y += deltaX * 0.005;
        nail.mesh.rotation.x += deltaY * 0.005;
      });

      previousMousePosition = { x: touch.clientX, y: touch.clientY };
    });
  }

  /**
   * Draw one frame immediately. Every mutator calls this so changes land even
   * when requestAnimationFrame is throttled (backgrounded tab, hidden pane).
   */
  render() {
    this.renderer.render(this.scene, this.camera);
  }

  updateColor(color) {
    this.customization.color = color;
    this.nails.forEach((nail) => {
      nail.mesh.material.color.set(color);
    });
    this.render();
  }

  updateFinish(finish) {
    this.customization.finish = finish;
    this.nails.forEach((nail) => {
      nail.mesh.material.dispose();
      nail.mesh.material = this.createNailMaterial();
    });
    this.render();
  }

  updateLength(length) {
    this.customization.length = Math.max(0, Math.min(1, length));
    this.rebuildNailGeometry();
    this.render();
  }

  updateShape(shape) {
    if (!isNailShape(shape)) return;
    this.customization.shape = shape;
    this.rebuildNailGeometry();
    this.render();
  }

  rebuildNailGeometry() {
    const length = 0.34 + this.customization.length * 0.42;
    this.nails.forEach((nail) => {
      nail.mesh.geometry.dispose();
      nail.mesh.geometry = createNailGeometry({
        width: nail.position.width,
        length,
        shape: this.customization.shape,
      });
    });
  }

  getCustomization() {
    return { ...this.customization };
  }

  setCustomization(config) {
    Object.assign(this.customization, config);
    if (config.color) this.updateColor(config.color);
    if (config.finish) this.updateFinish(config.finish);
    if (config.length !== undefined) this.updateLength(config.length);
    if (config.shape) this.updateShape(config.shape);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Gentle rotation for idle nails
    this.nails.forEach((nail, index) => {
      nail.mesh.rotation.y += 0.002;
      nail.mesh.position.y += Math.sin(Date.now() * 0.001 + index) * 0.0001;
    });

    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    const width = this.container.clientWidth;
    const height = this.container.clientHeight;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.render();
  }

  dispose() {
    this.scene.traverse((object) => {
      if (!object.isMesh) return;
      object.geometry?.dispose();
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose());
      } else {
        object.material?.dispose();
      }
    });
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

export { NailAtelier };
