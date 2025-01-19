import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    corePlugins: {
        container: false,
    },
    theme: {
        extend: {
            fontFamily: {
                raleway: ["Raleway", "sans-serif"],
            },
            colors: {
                background: 'var(--color-background)', 
                primary: 'var(--color-primary)',       
                secondary: 'var(--color-secondary)',   
                white: 'var(--color-white)',           
            },
        },
    },

    plugins: [forms],
};
