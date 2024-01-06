import "../css/global.css"
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

camera.position.z = 40;
const loader = new GLTFLoader();
loader.load("../src/models/chel.gltf", (glb) => {
  scene.add(glb.scene);
  glb.scene.rotation.x -= 1.35;
  renderer.render(scene, camera);
});

const toplight = new THREE.DirectionalLight(0xffffff, 5);
toplight.position.set(1, 1, 1.4)
toplight.castShadow = true;
scene.add(toplight);


const light = new THREE.AmbientLight(0xc4c4c4, .7)

scene.add(light);
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();