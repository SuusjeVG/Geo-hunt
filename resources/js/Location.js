export default class Location {
    constructor(lat, lng) {
        this.latitude = lat;
        this.longitude = lng;
    }

    async getCoordinates() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((pos) => {
                    this.latitude = pos.coords.latitude;
                    this.longitude = pos.coords.longitude;
                    resolve(this);
                }, (err) => reject(err));
            } else {
                reject('Geolocation is not supported');
            }
        });
    }

    distanceTo(otherLocation) {
        // Bereken de afstand in meter/kilometer (Haversine formula)
        // ...
    }
}