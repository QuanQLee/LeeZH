/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html', './src/**/*.{ts,tsx}'],
    darkMode: 'class',                // ÊÖ¶¯ÇÐ»»ÉîÉ«
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0ea5e9',      // theme-primary
                    dark: '#0284c7',
                },
            },
        },
    },
    plugins: [],
};