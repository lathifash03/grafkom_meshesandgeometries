import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { scene } from './init.js';

const loader = new GLTFLoader();
loader.load(
    'path/to/model.gltf',
    (gltf) => {
        scene.add(gltf.scene);
    },
    undefined,
    (error) => {
        console.error('Error loading model:', error);
    }
);
