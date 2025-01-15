# ===== STAGE 1: Node build =====
FROM node:18 AS node-builder

# 1. Werken in /app
WORKDIR /app

# 2. Kopieer package.json / package-lock.json
COPY package.json package-lock.json ./

# 3. Installeer node dependencies
RUN npm install

# 4. Kopieer alle front-end files (resources/, vite.config.js, etc.)
COPY . ./

# 5. Build je front-end (vite / webpack / etc.)
RUN npm run build


# ===== STAGE 2: PHP (zonder nginx) =====
FROM php:8.3-fpm

# 6. Installeer extra Linux-pakketten en extensies (voor pdo_mysql/pdo_pgsql, zip, etc.)
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip

RUN docker-php-ext-install pdo_mysql pdo_pgsql zip

# 7. Kopieer Composer vanuit de officiële composer-image
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 8. Werkmap voor Laravel
WORKDIR /var/www/html

# 9. Kopieer alle Laravel-bestanden (uit je repo)
COPY . .

# 10. Kopieer de gebuilde assets vanuit de Node-stage
COPY --from=node-builder /app/public/build ./public/build

# 11. Installeer PHP dependencies (production, zonder dev)
RUN composer install --no-dev --optimize-autoloader

# 12. Kopieer je entrypoint-script en maak 'm uitvoerbaar
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# 13. Expose poort 8000 (artisan serve)
EXPOSE 8000

# 14. De entrypoint start straks alle artisan-commando's + php artisan serve
ENTRYPOINT ["/entrypoint.sh"]