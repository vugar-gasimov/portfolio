/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-start-color": "#0c0c1d",
        "custom-end-color": "#111132",
        "purple-text": "#663399",
        "bg-hero-text": " #ffffff09",
      },
    },
  },
  plugins: [],
};
