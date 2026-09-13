/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                customBlue: {
                    50: "#e0f7ff",
                    100: "#caf0f8",
                    200: "#ade8f4",
                    300: "#90e0ef",
                    400: "#48cae4",
                    500: "#00b4d8",
                    600: "#0096c7",
                    700: "#0077b6",
                    800: "#03045e",
                    900: "#023e8a",
                },
            },
        },
    },
    plugins: [],
};
