export default class Player {
    constructor() {
        this.username = ' ';
        this.inventory = [];
        this.location = {}; // Een object, geen array
    }

    async getCurrentPosition() {
        return new Promise((resolve, reject) => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        this.location = {
                            latitude: pos.coords.latitude,
                            longitude: pos.coords.longitude,
                        };
                        console.log('Initial position:', this.location);
                        resolve(this.location);
                    },
                    (err) => {
                        console.error('Error getting initial position:', err.message);
                        reject(err);
                    },
                    {
                        enableHighAccuracy: true,
                        timeout: 5000,
                        maximumAge: 0,
                    }
                );
            } else {
                reject('Geolocation is not supported by this browser.');
            }
        });
    }

    watchPosition(onLocationUpdate) {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(
                (pos) => {
                    this.location = {
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    };
                    console.log('Updated position:', this.location);

                    if (onLocationUpdate) {
                        onLocationUpdate(this.location);
                    }
                },
                (err) => {
                    console.error('Error watching position:', err.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 5000,
                    maximumAge: 0,
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }
    
    // async requestLocation() {
    //     if (navigator.geolocation) {
    //         navigator.geolocation.watchPosition(
    //             (pos) => {
    //                 // Update de locatie
    //                 this.location = {
    //                     latitude: pos.coords.latitude,
    //                     longitude: pos.coords.longitude,
    //                 };
    //                 console.log('Updated Location:', this.location);
    //             },
    //             (err) => {
    //                 console.error('Error getting location:', err.message);
    //             },
    //             {
    //                 enableHighAccuracy: true, // Gebruik GPS als mogelijk
    //                 maximumAge: 0,           // Gebruik geen oude locatie
    //                 timeout: 1000,          
    //             }
    //         );
    //     } else {
    //         console.error('Geolocation is not supported by this browser.');
    //     }
    //     // if (navigator.geolocation) {
    //     //     navigator.geolocation.watchPosition(
    //     //         (pos) => {

    //     //             console.log('hello');
    //     //             // this.location = {
    //     //             //     latitude: pos.coords.latitude,
    //     //             //     longitude: pos.coords.longitude,
    //     //             // };
    //     //             // console.log('Updated Location:', this.location);

    //     //             // // Roep de callback aan met de nieuwe locatie
    //     //             // if (onLocationUpdate) {
    //     //             //     onLocationUpdate(this.location);
    //     //             // }
    //     //         },
    //     //         (err) => {
    //     //             console.error('Error getting location:', err);
    //     //         }
    //     //     );
    //     // } else {
    //     //     console.error('Geolocation is not supported by this browser.');
    //     // }
    // }


    vibrate() {
        // Example: phone vibration
        if (navigator.vibrate) navigator.vibrate(200);
    }

    openCamera() {
        // Example: open AR camera
    }
}