# ===== STAGE 1: Node build =====
FROM node:18 AS node-builder

# Maak een map voor de app in deze stage
WORKDIR /app

# Kopieer de Node-package-bestanden en installeer dependencies
COPY package*.json ./
RUN npm install

# Kopieer nu de rest van je project (bijv. je resources, vite.config.js etc.)
COPY . .

# Build je front-end (gebruik bijv. npm run prod, npm run build, of wat je in package.json hebt staan)
RUN npm run build

# ===== STAGE 2: PHP + Nginx =====
FROM php:8.2-fpm-bullseye

# (A) Installeer benodigde pakketten (Nginx, git, etc.)
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       nginx \
       libpq-dev \
       libzip-dev \
       zip unzip \
       git \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip \
    && rm -rf /var/lib/apt/lists/*

# (B) Installeer Composer (vanaf de officiële composer image)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# (C) Maak een werkdirectory voor de Laravel-app
WORKDIR /var/www/html

# (D) Kopieer al je Laravel-files
COPY . .

# (E) Kopieer de gebuilde assets vanuit de Node-stage
COPY --from=node-builder /app/public/build ./public/build

# (F) Installeer Laravel (production)
RUN composer install --no-dev --optimize-autoloader

# (Optioneel) genereer key of doe je migrations hier
# RUN php artisan key:generate
# RUN php artisan migrate --force

# (G) Nginx configureren
# Voorbeeld: kopieer je eigen Nginx-site.conf naar de juiste plek
COPY ./conf/nginx/nginx-site.conf /etc/nginx/sites-available/default

# (H) Expose poort 80
EXPOSE 80

# (I) Startservices: Nginx + PHP-FPM
#   - In Docker start je maar één "CMD", dus we starten eerst Nginx en dan php-fpm in de voorgrond.
CMD service nginx start && php-fpm