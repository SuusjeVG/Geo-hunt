export default class Marker {
    constructor(id, name, location, radius) {
        this.id = id;
        this.name = name;
        this.location = location; 
        this.radius = radius
        this.isCaptured = false;
    }

    isNearby(playerLocation) {
        const markerLatLng = L.latLng(this.location.latitude, this.location.longitude);
        const playerLatLng = L.latLng(playerLocation.latitude, playerLocation.longitude);

        const distance = markerLatLng.distanceTo(playerLatLng); // Afstand in meters
        return distance <= this.radius;
    }
}