# Stap 1: Gebruik een PHP image met de juiste versie
FROM php:8.2-fpm

# Stap 2: Installeer vereiste pakketten
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    git \
    curl \
    npm \
    && docker-php-ext-install pdo_mysql zip

# Stap 3: Installeer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Stap 4: Stel de werkmap in
WORKDIR /var/www/html

# Stap 5: Kopieer alle bestanden naar de container
COPY . .

# Stap 6: Installeer PHP- en Node.js-afhankelijkheden
RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build

# Stap 7: Cache Laravel configuraties en routes
RUN php artisan config:cache
RUN php artisan route:cache

# Stap 8: Stel rechten in voor opslagmappen
RUN chmod -R 777 storage bootstrap/cache

# Stap 9: Stel de poort in voor PHP-FPM
EXPOSE 9000

# Stap 10: Start Laravel met artisan
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]