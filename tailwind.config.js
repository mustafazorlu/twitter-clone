/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                box: "rgba(255,255,255,0.2) 0 0 15px, rgba(255,255,255,0.15) 0 0 3px 1px",
            },
        },
    },
    plugins: [],
};
