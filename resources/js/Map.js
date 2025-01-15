import L from "leaflet";
import 'leaflet/dist/leaflet.css';

import Marker from './Marker.js';

export default class Map {
    constructor() {
        this.$map = null;
        this.markers = [];
        this.playerMarker = null;
    }

    async renderMap() {
        this.createMap();
        this.loadMarkersFromAPI() 
    }   

    createMap() {
        this.$map = L.map('map').fitWorld();

        L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=J44dxEKdDtKhfOY3ldTa', {
            maxZoom: 22,
            preferCanvas: true,
        }).addTo(this.$map);

        navigator.geolocation.getCurrentPosition((pos) => {
            const { latitude, longitude} = pos.coords;
            this.$map.setView([latitude, longitude], 15);
        });
    }

    // Speler-marker instellen of updaten
    updatePlayerMarker(lat, lng) {

        if (!this.playerMarker) {
            // Maak een nieuwe speler-marker
            this.playerMarker = L.circleMarker([lat, lng], {
                radius: 8,
                color: "blue",
                fillColor: "#1d4bf0",
                fillOpacity: 0.7,
            }).addTo(this.$map);
        } else {
            // Update de bestaande speler-marker
            const currentLatLng = this.playerMarker.getLatLng();
            if (currentLatLng.lat !== lat || currentLatLng.lng !== lng) {
                this.playerMarker.setLatLng([lat, lng]);
            }
        }
  
    }

    async loadMarkersFromAPI() {
        try {
            const response = await fetch("https://fontys-geolocation-api.onrender.com/");
            const data = await response.json();
            
            data.forEach((item) => {
                // Haal de coördinaten uit het object
                const lat = item.location.coordinates[0];
                const lng = item.location.coordinates[1];
    
                // Plaats een Leaflet-marker op de kaart
                L.marker([lat, lng], {
                    icon: L.icon({
                        iconUrl: 'assets/icons/location-dot-solid.svg',
                        iconSize: [20, 40],
                    })
                })
                .addTo(this.$map)
                .bindPopup(item.name)

    
                // Bewaar eigen Marker-instance in this.markers array
                const markerObj = new Marker(item._id, item.name, {
                    latitude: lat,
                    longitude: lng,
                });
                this.markers.push(markerObj);

                
            });
        } catch (error) {
            console.error("Error loading data:", error);
        }

    }
}