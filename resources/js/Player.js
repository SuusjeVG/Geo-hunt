export default class Player {
    constructor() {
        this.username = ' ';
        this.inventory = [];
        this.location = {}; // Een object, geen array
    }
    
    requestLocation(onLocationUpdate) {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (pos) => {
                    this.location = {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    };
                    console.log('Updated Location:', this.location);

                    // Roep de callback aan met de nieuwe locatie
                    if (onLocationUpdate) {
                        onLocationUpdate(this.location);
                    }
                },
                (err) => {
                    console.error('Error getting location:', err);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }


    vibrate() {
        // Example: phone vibration
        if (navigator.vibrate) navigator.vibrate(200);
    }

    openCamera() {
        // Example: open AR camera
    }
}