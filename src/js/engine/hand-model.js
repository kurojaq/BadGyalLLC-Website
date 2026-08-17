/**
 * Procedural hand presentation used until production hand assets are available.
 *
 * The important contract is the returned anchor list: each nail is attached
 * to a named finger anchor instead of being positioned against the scene.
 * A scanned hand can replace this module later while keeping that contract.
 */

import * as THREE from 'three';

export const HAND_FINGERS = [
  { name: 'Thumb', x: -0.39, y: -0.13, length: 0.3, radius: 0.12, angle: -0.62, width: 0.17 },
  { name: 'Index', x: -0.2, y: 0.04, length: 0.52, radius: 0.095, angle: -0.08, width: 0.14 },
  { name: 'Middle', x: 0, y: 0.06, length: 0.62, radius: 0.102, angle: 0, width: 0.15 },
  { name: 'Ring', x: 0.2, y: 0.04, length: 0.55, radius: 0.096, angle: 0.06, width: 0.14 },
  { name: 'Pinky', x: 0.37, y: -0.02, length: 0.4, radius: 0.08, angle: 0.13, width: 0.12 },
];

export function createProceduralHand({ skinTone = '#9b5b42' } = {}) {
  const hand = new THREE.Group();
  hand.name = 'procedural-hand';

  const skinMaterial = new THREE.MeshPhysicalMaterial({
    color: skinTone,
    roughness: 0.72,
    metalness: 0,
    clearcoat: 0.08,
    clearcoatRoughness: 0.65,
  });

  const palmGeometry = new THREE.SphereGeometry(0.52, 32, 20);
  const palm = new THREE.Mesh(palmGeometry, skinMaterial);
  palm.name = 'palm';
  palm.position.set(0, -0.28, 0);
  palm.scale.set(1.12, 0.72, 0.5);
  palm.castShadow = true;
  palm.receiveShadow = true;
  hand.add(palm);

  const anchors = HAND_FINGERS.map((finger) => {
    const anchor = new THREE.Group();
    anchor.name = `${finger.name.toLowerCase()}-anchor`;
    anchor.position.set(finger.x, finger.y, 0.02);
    anchor.rotation.z = finger.angle;

    const fingerGeometry = new THREE.CapsuleGeometry(
      finger.radius,
      finger.length,
      8,
      16,
    );
    const fingerMesh = new THREE.Mesh(fingerGeometry, skinMaterial);
    fingerMesh.name = `${finger.name.toLowerCase()}-mesh`;
    fingerMesh.position.y = finger.length / 2 + finger.radius;
    fingerMesh.castShadow = true;
    fingerMesh.receiveShadow = true;
    anchor.add(fingerMesh);
    hand.add(anchor);

    return {
      ...finger,
      anchor,
      nailOffset: new THREE.Vector3(0, finger.length + finger.radius * 1.7, finger.radius + 0.035),
    };
  });

  return { hand, anchors };
}
