export default class Player {
    constructor() {
        this.username = ' ';
        this.inventory = [];
        this.location = {}; // Een object, geen array
    }
    
    startTracking(onLocationUpdate) {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;

                    this.location = { latitude, longitude };

                    if (onLocationUpdate) {
                        onLocationUpdate(this.location);
                    }

                },
                (error) => {
                    console.error("Error watching position:", error.message);
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 0,
                    timeout: 10000,
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }


    vibrate() {
        if (navigator.vibrate) {
            navigator.vibrate(200); // Laat de telefoon 200ms trillen
            console.log("Phone is vibrating!");
        }
    }

    openCamera() {
        // Example: open AR camera
    }
}