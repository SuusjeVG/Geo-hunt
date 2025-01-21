import * as THREE from "three";
import { ARButton } from "three/addons/webxr/ARButton.js";

export default class ARRenderer {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
    }

    init() {
        // Setup Three.js Scene
        this.scene = new THREE.Scene();

        // Camera
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20);
        this.scene.add(this.camera);

        // Renderer
        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.xr.enabled = true;
        document.body.appendChild(this.renderer.domElement);

        // Voeg een ARButton toe
        document.body.appendChild(ARButton.createButton(this.renderer));

        // Responsive rendering
        window.addEventListener("resize", () => {
            this.camera.aspect = window.innerWidth / window.innerHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(window.innerWidth, window.innerHeight);
        });
    }

    addObject(object) {
        this.scene.add(object);
    }

    startRendering() {
        this.renderer.setAnimationLoop(() => {
            this.renderer.render(this.scene, this.camera);
        });
    }
}