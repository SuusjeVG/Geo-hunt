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

            // Controleer voor alle markers of de speler dichtbij is
            this.map.markers.forEach((markerObj) => {
                if (markerObj.isNearby(location)) {
                    console.log(`Player is within radius of marker: ${markerObj.name}`);
                    this.player.vibrate(); // Laat de telefoon trillen
                }
            });
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

