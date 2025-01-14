# ===== STAGE 1: Node build =====
FROM node:18 AS node-builder

# 1. Werken in /app
WORKDIR /app

# 2. Kopieer package.json / package-lock.json
COPY package*.json ./

# 3. Installeer node dependencies
RUN npm install

# 4. Kopieer alle files (resources/, vite.config.js, etc.)
COPY . .

# 5. Build (bv. npm run build of npm run prod, afhankelijk van je config)
RUN npm run build


# ===== STAGE 2: PHP (zonder nginx) =====
FROM php:8.2-fpm

# 6. Systeempakketten voor bv. pdo_mysql, pdo_pgsql etc.
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    zip \
    unzip

# 7. Installeer PHP-extensies
RUN docker-php-ext-install pdo_mysql pdo_pgsql zip

# 8. Kopieer Composer vanuit officiële Composer‐image
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# 9. Werkmap voor Laravel
WORKDIR /var/www/html

# 10. Kopieer alle Laravel‐files
COPY . .

# 11. Kopieer de gebuilde assets vanuit de Node‐stage
COPY --from=node-builder /app/public/build ./public/build

# 12. Installeer PHP dependencies (zonder dev, als je dat wilt)
RUN composer install --no-dev --optimize-autoloader

# 13. (Optioneel) Artisan-commando's (bv. key:generate, migrate --force etc.)
# RUN php artisan key:generate
# RUN php artisan migrate --force

# 14. Expose poort 8000 (waar artisan serve op draait)
EXPOSE 8000

# 15. Start de app met php artisan serve
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]