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
            maxZoom: 19,
        }).addTo(this.$map);
    }

    setPlayerMarker(lat, lng) {

        this.playerMarker = L.circle([lat, lng], {
            color: 'blue',
            fillColor: '#1d4bf0',
            fillOpacity: 0.5,
            radius: 5,
            // className: 'pulse-marker'
        }).addTo(this.$map);
        

        // // Maak een custom radar-marker
        // const radarDiv = document.createElement('div');
        // radarDiv.className = 'radar';

        // // Voeg de marker toe met Leaflet's DivIcon
        // const radarMarker = L.marker([lat, lng], {
        //     icon: L.divIcon({
        //         className: '', // Laat standaard klasse leeg
        //         html: radarDiv.outerHTML,
        //         iconSize: [100, 100],
        //         pane: 'fixedPane',
        //     }),
        // }).addTo(this.$map);

        this.$map.setView([lat, lng], 15);
    }

    updatePlayerMarker(lat, lng, duration = 1000) {
        if (!this.playerMarker) {
            console.error('Player marker does not exist!');
            return;
        }
    
        const startLatLng = this.playerMarker.getLatLng();
        const startLat = startLatLng.lat;
        const startLng = startLatLng.lng;
    
        const deltaLat = lat - startLat;
        const deltaLng = lng - startLng;
    
        let startTime;
    
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
    
            const currentLat = startLat + deltaLat * progress;
            const currentLng = startLng + deltaLng * progress;
    
            // Update de marker's locatie
            this.playerMarker.setLatLng([currentLat, currentLng]);
    
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
    
        requestAnimationFrame(step);
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