FROM php:8.3-fpm

# Installeer systeemvereisten
RUN apt-get update && apt-get install -y \
    libzip-dev \
    unzip \
    git \
    curl \
    npm \
    && docker-php-ext-install pdo_sqlite zip

# Installeer Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Stel de werkmap in
WORKDIR /var/www/html

# Kopieer alle bestanden naar de container
COPY . .

# Verwijder Node.js-cache voor schone installatie
RUN npm cache clean --force

# Installeer PHP- en Node.js-afhankelijkheden
RUN composer install --no-dev --optimize-autoloader
RUN npm install && npm run build

# Stel rechten in voor mappen
RUN chmod -R 777 database storage bootstrap/cache

# Laravel optimalisaties
RUN php artisan config:cache
RUN php artisan route:cache

# Start de Laravel server
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=10000"]