const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./vendor/laravel/jetstream/**/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./node_modules/flowbite/**/*.js",
        "./node_modules/flowbite/**/*.css",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                "gray-border": "#B5B5B5",
                "gray-border-light": "#E6E6E6",
                "dark-brown": "#AF9744",
                "light-brown": "#C4A94C",
                "background-overlay": "rgba(0,0,0,0.5)",
                "background-section": "#FFFDF6",
            },
            backgroundImage: {
                'subtraction-png': "url('/resources/img/subtraction.png')",
                'subtraction-ltr-png': "url('/resources/img/subtraction-ltr.png')",

            }
        },
        fontSize: {
            sm: "16px",
            base: "18px",
            xl: "20px",
            "2xl": "22px",
            "3xl": "25px",
            "4xl": "35px",
        },
    },

    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("flowbite/plugin"),
    ],
};
