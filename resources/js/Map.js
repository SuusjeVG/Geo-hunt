import L from "leaflet";
import 'leaflet/dist/leaflet.css';

import Marker from './Marker.js';

export default class Map {
    constructor() {
        this.$map = null;
        this.markers = [];
    }

    renderMap() {
        this.createMap();
        this.loadMarkersFromAPI() 
    }   

    createMap() {
        this.$map = L.map('map').fitWorld();

        L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=J44dxEKdDtKhfOY3ldTa', {
            maxZoom: 19,
        }).addTo(this.$map);
    }

    playerMarker(lat, lng) {
        const playerMarker = L.circle([lat, lng], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 50,
            className: 'pulse-marker'
        }).addTo(this.$map);

        this.$map.setView([lat, lng], 15);
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
                L.marker([lat, lng])
                    .addTo(this.$map)
                    .bindPopup(item.name);
    
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