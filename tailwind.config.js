/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xl: "1440px",
            lg: "976px",
            md: "768px",
            sm: "480px",
        },
        colors: {
            gray900: "#1E1E1E",
            gray700: "#292929",
            gray600: "#333333",
            white: "#F6F6F6",
            green: "#14E4CB",
        },
        container: {
            center: true,
        },
    },
    plugins: [],
    darkMode: "class",
};
