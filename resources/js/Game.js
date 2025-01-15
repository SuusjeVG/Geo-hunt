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

        // 2. Start het ophalen van de locatie
        this.player.requestLocation((currentLocation) => {
            if (!this.map.playerMarker) {
                // Maak de speler-marker als deze nog niet bestaat
                this.map.setPlayerMarker(currentLocation.latitude, currentLocation.longitude);
            } else {
                // Update de speler-marker
                this.map.updatePlayerMarker(currentLocation.latitude, currentLocation.longitude, 1000);
            }
        });
    }

}

const game = new Game();
