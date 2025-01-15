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

        // 2. Haal de initiële locatie op
        try {
            const initialLocation = await this.player.getCurrentPosition();
            this.map.setPlayerMarker(initialLocation.latitude, initialLocation.longitude);

            // 3. Start locatie-tracking
            this.player.watchPosition((newLocation) => {
                this.map.setPlayerMarker(newLocation.latitude, newLocation.longitude);

            // 4. Center de kaart op de nieuwe locatie
            this.centerMapButton(this.player.location.latitude, this.player.location.longitude);
            
        });
        } catch (error) {
            console.error('Error getting initial position:', error);
        }
    }

    
    centerMapButton(lat, lng) {
        const button = document.querySelector('[data-action="center-map"]');
        
        button.addEventListener('click', () => {
            this.map.$map.setView([lat, lng], 15);
        });
    }

}

const game = new Game();
