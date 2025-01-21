import ARRenderer from './ARRenderer';

export default class Player {
    constructor() {
        this.username = ' ';
        this.inventory = [];
        this.location = {};
        this.arRenderer = new ARRenderer(); // Nieuw: Voeg ARRenderer toe.
    }

    startTracking(onLocationUpdate) {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;

                    this.location = { latitude, longitude };

                    if (onLocationUpdate) {
                        onLocationUpdate(this.location);
                    }
                },
                (error) => {
                    console.error("Error watching position:", error.message);
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: 10000,
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    vibrate() {
        if (navigator.vibrate) {
            navigator.vibrate(200); // Laat de telefoon 200ms trillen
            console.log("Phone is vibrating!"); // Nieuw: Logging toegevoegd.
        }
    }

    openARCamera() {
        // Initialiseer de ARRenderer
        this.arRenderer.init();

        // Voeg een 3D-object toe
        const geometry = new THREE.BoxGeometry(0.1, 0.1, 0.1);
        const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const cube = new THREE.Mesh(geometry, material);
        cube.position.set(0, 0, -1); // Plaats 1 meter voor de camera
        this.arRenderer.addObject(cube);

        // Start de AR-rendering
        this.arRenderer.startRendering();
        console.log("AR camera geopend via ARRenderer!");
    }
}