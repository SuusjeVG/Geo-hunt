import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/Game.js'],
            refresh: true,
        }),
    ],
    build: {
        manifest: true, // Zorg dat het manifest wordt gegenereerd
        outDir: "public/build", // Plaats de bestanden in de public/build-map
    },
});
