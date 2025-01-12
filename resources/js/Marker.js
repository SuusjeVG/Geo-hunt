export default class Marker {
    constructor(id, name, location) {
        this.id = id;
        this.name = name;
        this.location = location; 
        this.isCaptured = false;
    }

    isNearby(playerLocation, radiusMeters = 100) {
        // Stel je wilt max 100 meter afstand
        const dist = this.location.distanceTo(playerLocation);
        return dist <= radiusMeters;
    }
}