/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  prefix: "",
  theme: {
    fontFamily: {
      DM: ["DM Serif Display", "serif"],
      Public: ["Public Sans", "sans-serif"],
    },
    screens: {
      sm: { min: "359px", max: "759px" },
      md: { min: "760px", max: "1290px" },
      xl: { min: "1291px", max: "1441px" },
    },
    extend: {
      boxShadow: {
        "3xl": "10px 10px 25px -10px rgba(54, 83, 107, 0.25)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
