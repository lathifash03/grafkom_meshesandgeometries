import * as THREE from 'three';
import { scene } from './init.js';
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js';

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const sphereGeometry = new THREE.SphereGeometry(0.5, 32, 32);
sphereGeometry.translate(1.5, 0, 0);

const mergedGeometry = BufferGeometryUtils.mergeBufferGeometries([boxGeometry, sphereGeometry], false);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const mergedMesh = new THREE.Mesh(mergedGeometry, material);

scene.add(mergedMesh);
