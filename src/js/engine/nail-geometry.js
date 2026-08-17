/**
 * Parametric nail geometry.
 *
 * The hand model is intentionally kept separate from this subsystem. Nail
 * geometry can therefore be reused on a scanned hand, a procedural hand, or
 * a future foot/toe presentation without changing the customization API.
 */

import * as THREE from 'three';

export const NAIL_SHAPES = ['oval', 'almond', 'square', 'coffin', 'stiletto'];

const SHAPE_ALIASES = {
  round: 'oval',
};

function normalizedShape(shape) {
  const candidate = SHAPE_ALIASES[shape] || shape;
  return NAIL_SHAPES.includes(candidate) ? candidate : 'oval';
}

/**
 * Build a shallow, bevelled nail plate from a 2D profile.
 * The base sits at y=0 and the tip extends toward positive y.
 */
export function createNailGeometry({
  width = 0.15,
  length = 0.6,
  shape = 'oval',
  depth = 0.055,
} = {}) {
  const profile = new THREE.Shape();
  const halfWidth = width / 2;
  const shoulderY = length * 0.58;
  const normalized = normalizedShape(shape);

  profile.moveTo(-halfWidth, 0);
  profile.lineTo(-halfWidth, shoulderY);

  switch (normalized) {
    case 'square':
      profile.lineTo(-halfWidth, length);
      profile.lineTo(halfWidth, length);
      profile.lineTo(halfWidth, shoulderY);
      break;

    case 'coffin':
      profile.lineTo(-halfWidth * 0.78, length);
      profile.lineTo(halfWidth * 0.78, length);
      profile.lineTo(halfWidth, shoulderY);
      break;

    case 'stiletto':
      profile.lineTo(0, length);
      profile.lineTo(halfWidth, shoulderY);
      break;

    case 'almond':
      profile.quadraticCurveTo(-halfWidth * 0.92, length * 0.86, 0, length);
      profile.quadraticCurveTo(halfWidth * 0.92, length * 0.86, halfWidth, shoulderY);
      break;

    case 'oval':
    default:
      profile.quadraticCurveTo(-halfWidth, length * 0.9, 0, length);
      profile.quadraticCurveTo(halfWidth, length * 0.9, halfWidth, shoulderY);
      break;
  }

  profile.lineTo(-halfWidth, 0);

  const geometry = new THREE.ExtrudeGeometry(profile, {
    depth,
    bevelEnabled: true,
    bevelSegments: 3,
    bevelSize: Math.min(width * 0.08, 0.014),
    bevelThickness: Math.min(depth * 0.35, 0.018),
    curveSegments: 12,
  });

  geometry.computeVertexNormals();
  return geometry;
}

export function isNailShape(shape) {
  return NAIL_SHAPES.includes(SHAPE_ALIASES[shape] || shape);
}
