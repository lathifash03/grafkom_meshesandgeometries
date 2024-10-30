// animate.js
import { renderer, scene, camera } from './init.js';

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();
