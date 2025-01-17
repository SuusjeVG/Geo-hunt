# Geo Hunt  

**Geo Hunt** is een Laravel-webapplicatie ontwikkeld als onderdeel van het project **Digitaal Buitenspelen**, met als doel IT-studenten op de Fontys-campus te motiveren tot meer fysieke activiteit en sociale interactie tijdens hun pauzes. Het biedt basisfunctionaliteiten zoals GPS-gebaseerde interacties en AR-componenten en vormt een solide basis voor verdere uitbreiding met gamification-elementen.  


## 📋 Inhoudsopgave  
1. [Live Preview](#-live-preview)  
2. [Vereisten en Technologieën](#-vereisten-en-technologieën)  
3. [Installatie](#-installatie)  
4. [Functionaliteiten](#-functionaliteiten)  
5. [Deployment met Docker](#-deployment-met-docker)  
6. [Toekomstige Uitbreidingen](#-toekomstige-uitbreidingen)  
7. [Contact](#-contact)  

---

## 🌐 Live Preview  

Bekijk de live preview van **Geo Hunt** via de volgende link:  

[**Live Preview**](https://geo-hunt.onrender.com/)  

**Let op:**  
- Deze preview is geoptimaliseerd voor mobiele apparaten. Gebruik een telefoon of simuleer een mobiel scherm in de browser voor de beste ervaring. Locatie-tracking op een pc is minder accuraat.  
- Je kunt inloggen met de volgende testgegevens:  
  - **Gebruikersnaam:** `testuser@example.com`  
  - **Wachtwoord:** `test1234`  

---

## 📦 Vereisten en Technologieën  

### Vereisten  
Zorg ervoor dat je de volgende software hebt geïnstalleerd:  
- PHP 8.0 of hoger  
- Composer  
- Node.js (voor NPM)  
- Docker (voor optionele deployment, versie 20.10 of hoger)  

### Gebruikte Technologieën  
Dit project maakt gebruik van:  
- **Laravel + Livewire:** Voor zowel backend als dynamische UI-componenten.  
- **Leaflet.js:** Interactieve kaarten en locatiegebaseerde interacties.  
- **WebXR en Three.js:** Voor AR-functionaliteit en 3D-rendering.  
- **JavaScript API's:** Voor locatie (Navigator API), camera-interacties (Camera API), en haptische feedback (Vibration API).  

---

## 🚀 Installatie  

Volg de onderstaande stappen om de applicatie lokaal te installeren en te draaien:  

### 1. Clone de repository  
```bash
git clone https://github.com/SuusjeVG/Geo-hunt
cd Geo-hunt
```  

### 2. Installeer dependencies  
```bash
composer install
npm install
```  

### 3. Maak een `.env`-bestand  
```bash
cp .env.example .env
```  

### 4. Genereer een applicatiesleutel  
```bash
php artisan key:generate
```  

### 5. Bouw de front-end assets  
```bash
npm run build
```  

### 6. Voer database-migraties uit (optioneel)  
```bash
php artisan migrate
```  

### 7. Start de server  
```bash
php artisan serve
```  

De applicatie is nu toegankelijk via `http://127.0.0.1:8000`.  

---

## ✨ Functionaliteiten  

- **Login- en registratiesysteem:** Gebruikers kunnen accounts aanmaken en inloggen.  
- **Dashboard:** Toont gebruikersinformatie en prestaties.  
- **GPS-gebaseerde interacties:** Gebruikers kunnen locaties op de campus ontdekken.  
- **AR-functionaliteiten:** Augmented Reality voor een meeslepende spelervaring.  

---

## 🐳 Deployment met Docker  

Deze repository bevat een **Dockerfile** die kan worden gebruikt voor het deployen van de applicatie op een PHP-hostingserver of lokaal via een Docker-container.  

### Gebruik van de Dockerfile  

1. **Bouw de Docker-container**  
   ```bash
   docker build -t geo-hunt .
   ```  

2. **Start de container**  
   ```bash
   docker run -p 8000:8000 geo-hunt
   ```  

3. **Toegang tot de applicatie**  
   Open je browser en ga naar:  
   ```
   http://127.0.0.1:8000
   ```  

---

## 🔮 Toekomstige Uitbreidingen  

- **Gamification:** Implementatie van punten, badges, en ranglijsten.  
- **Sociale interactie:** Samenwerking en competitie tussen gebruikers.  
- **Nieuwe thema’s:** Aanpassing van de interface om beter aan te sluiten bij de doelgroep.  

---

## 📞 Contact  

Voor vragen of verdere ontwikkeling:  

**Naam:** Susan van Glabbeek  
**E-mail:** susan.vanglabbeek@student.fontys.nl  

---  