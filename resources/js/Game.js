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
        // 1. Vraag de locatie op en wacht tot het binnen is
        await this.player.requestLocation();

        // 2. Render de kaart
        this.map.renderMap();

        // 3. Plaats de speler-cirkel
        this.map.playerMarker(
            this.player.location.latitude,
            this.player.location.longitude
        );
    }

}

const game = new Game();
