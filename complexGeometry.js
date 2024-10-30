// complexGeometry.js
import * as THREE from 'three';
import { scene } from './init.js';

const shape = new THREE.Shape();
shape.moveTo(0, 0.8);
for (let i = 0; i < 5; i++) {
    shape.lineTo(Math.cos((i * 144 * Math.PI) / 180) * 0.8, Math.sin((i * 144 * Math.PI) / 180) * 0.8);
}

const extrudeSettings = {
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.02,
    bevelSegments: 5,
};
const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const material = new THREE.MeshBasicMaterial({ color: 0x0077ff });
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);
