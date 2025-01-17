# Geo hunt

**Geo Hunt is** een Laravel-webapplicatie ontwikkeld als onderdeel van het project **Digitaal Buitenspelen**, met als doel IT-studenten op de Fontys-campus te motiveren tot meer fysieke activiteit en sociale interactie tijdens hun pauzes. Het biedt basisfunctionaliteiten zoals GPS-gebaseerde interacties en AR-componenten, en vormt een solide basis voor verdere uitbreiding met gamification-elementen.  


## 📋 Inhoudsopgave  
1. [Vereisten](#vereisten)  
2. [Installatie](#installatie)  
3. [Functionaliteiten](#functionaliteiten)  
4. [Gebruik](#gebruik)  
5. [Toekomstige Uitbreidingen](#toekomstige-uitbreidingen)  
6. [Contact](#contact)  

---

## 📦 Vereisten & Technologiën 

Zorg ervoor dat je de volgende software hebt geïnstalleerd:  
- PHP 8.0 of hoger  
- Composer  
- Node (voor NPM)  
- MySQL (of een andere compatibele database)  

Dit project maakt gebruik van:
- **Laravel + livewire**: Voor zowel backend als frontend (Authentication && Database migratie).
- **Leaflet.js**: Interactieve kaarten en locatiegebaseerde interacties.
- **WebXR en Three.js**: Voor AR-functionaliteit en 3D-rendering.
- **Javascript API's**: Voor locatie, camera-interacties en haptische feedback.
---

## 🚀 Installatie  

Volg de onderstaande stappen om de applicatie lokaal te installeren en te draaien.  

### 1. Clone de repository  
```bash
git clone https://github.com/SuusjeVG/Geo-hunt
cd <project-directory>
```

### 2. Installeer dependencies  
Zorg dat je Composer en NPM hebt geïnstalleerd en voer de volgende commando's uit:  
```bash
composer install
npm install
```

### 3. Maak een `.env`-bestand  
Kopieer het voorbeeld `.env`-bestand en pas het indien nodig aan:  
```bash
cp .env.example .env
```

### 4. Genereer een applicatiesleutel  
```bash
php artisan key:generate
```

### 5. Bouw de front-end assets  
Gebruik NPM om de front-end assets te bouwen:  
```bash
npm run build
```

### 6. Voer database-migraties uit (optioneel)  
Als de applicatie een database gebruikt:  
```bash
php artisan migrate
```

### 7. Start de server  
Draai de ingebouwde Laravel-server:  
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

## 🛠 Gebruik  

Na installatie kun je de applicatie openen in je browser via `http://127.0.0.1:8000`. Gebruik de volgende standaardinloggegevens om toegang te krijgen (indien ingesteld):  

- **Gebruikersnaam:** `testuser@example.com`  
- **Wachtwoord:** `test1234`  

---

## 🐳 Deployment met Docker  

Deze repository bevat een **Dockerfile** die kan worden gebruikt voor het deployen van de applicatie op een PHP-hostingserver of lokaal via een Docker-container.  

* Vereist: Docker versie: 20.10 of hoger

### Gebruik van de Dockerfile  

1. **Bouw de Docker-container**  
   Voer het volgende commando uit in de root van het project:  
   ```bash
   docker build -t digitaal-buitenspelen .
   ```  

2. **Start de container**  
   Draai de applicatie met het volgende commando:  
   ```bash
   docker run -p 8000:8000 digitaal-buitenspelen
   ```  

3. **Toegang tot de applicatie**  
   Open je browser en ga naar:  
   ```
   http://127.0.0.1:8000
   ```  

---


## 🔮 Toekomstige Uitbreidingen  

- **Gamification:** Implementatie van punten, badges en ranglijsten.  
- **Sociale interactie:** Samenwerking en competitie tussen gebruikers.  
- **Nieuwe thema’s:** Aanpassing van de interface om beter aan te sluiten bij de doelgroep.  

---

## 📞 Contact  

Voor vragen of verdere ontwikkeling:  

**Naam:** Susan van Glabbeek  
**E-mail:** susan.vanglabbeek@student.fontys.nl  

---  