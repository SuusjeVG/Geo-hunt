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
    }

    
    centerMapButton(lat, lng) {
        const button = document.querySelector('[data-action="center-map"]');
        
        button.addEventListener('click', () => {
            this.map.$map.setView([lat, lng], 15);
        });
    }

}

const game = new Game();
