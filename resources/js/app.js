// import './bootstrap';
import Map from './Map';
import Player from './Player';

class Game {
    constructor() {
        this.map = new Map();
        this.player = new Player();

        this.init();
    }

    async init() {
        // 1. Render de kaart met markers
        await this.map.renderMap();

        // Start locatie-tracking
        this.player.startTracking((location) => {
            this.map.updatePlayerMarker(location.latitude, location.longitude);
    
            let isNearbyMarker = false;
    
            this.map.markers.forEach((markerObj) => {
                if (markerObj.isNearby(location)) {
                    console.log(`Player is within radius of marker: ${markerObj.name}`);
                    this.player.vibrate();
                    isNearbyMarker = true;
                }
            });
    
            if (isNearbyMarker) {
                this.enableCameraButton();
            } else {
                this.disableCameraButton();
            }
        });

        // 2. Centreer de kaart op de spelerlocatie
        this.centerMapButton();
    }

    enableCameraButton() {
        const cameraButton = document.querySelector('[data-action="camera"]');
        cameraButton.disabled = false;
        cameraButton.classList.remove("opacity-50", "cursor-not-allowed");
    }
    
    disableCameraButton() {
        const cameraButton = document.querySelector('[data-action="camera"]');
        cameraButton.disabled = true;
        cameraButton.classList.add("opacity-50", "cursor-not-allowed");
    }

    
    centerMapButton(lat, lng) {
        const button = document.querySelector('[data-action="center-map"]');
        
        button.addEventListener('click', () => {
            if (this.player.location.latitude && this.player.location.longitude) {
                // Centreer de kaart op de spelerlocatie
                this.map.$map.panTo([this.player.location.latitude, this.player.location.longitude]);
            } else {
                console.warn("Player location is not available yet.");
            }
        });
        
    }

}

const game = new Game();

