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
        });

        // 2. Centreer de kaart op de spelerlocatie
        this.centerMapButton();
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

// Service Worker registratie
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/service-worker.js")
        .then((registration) => {
            console.log("Service Worker registered with scope:", registration.scope);

            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                if (installingWorker) {
                    installingWorker.onstatechange = () => {
                        if (installingWorker.state === "installed") {
                            if (navigator.serviceWorker.controller) {
                                console.log("New content is available; please refresh.");
                            } else {
                                console.log("Content is cached for offline use.");
                            }
                        }
                    };
                }
            };
        })
        .catch((error) => {
            console.error("Service Worker registration failed:", error);
        });
}

