export default class Location {
    constructor(lat, lng) {
        this.latitude = lat;
        this.longitude = lng;
    }

    distanceTo(otherLocation) {
        // Bereken de afstand in meter/kilometer (Haversine formula)
        // ...
    }
}