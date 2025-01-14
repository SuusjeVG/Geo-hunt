#!/usr/bin/env sh

# Stop bij error
set -e

echo "=== Running artisan key:generate ==="
php artisan key:generate

echo "=== Running artisan migrate --force ==="
php artisan migrate --force

echo "=== Caching config & routes ==="
php artisan config:cache
php artisan route:cache

# Start de server (met 'exec' zodat logs goed worden doorgegeven aan Docker)
echo "=== Starting php artisan serve on port 8000 ==="
exec php artisan serve --host=0.0.0.0 --port=8000