export default class Player {
    constructor() {
        this.username = ' ';
        this.inventory = [];
        this.location = {}; // Een object, geen array
    }

    async requestLocation() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        this.location = {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude
                        };
                        console.log('Location in Player:', this.location);
                        resolve(this.location); // We geven de locatie terug
                    },
                    (err) => {
                        console.error(err);
                        reject(err);
                    }
                );
            } else {
                reject('Geolocation is not supported by this browser.');
            }
        });
    }


    vibrate() {
        // Example: phone vibration
        if (navigator.vibrate) navigator.vibrate(200);
    }

    openCamera() {
        // Example: open AR camera
    }
}