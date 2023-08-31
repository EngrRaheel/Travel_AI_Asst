/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  
  theme: {
    screens: {
      xs: "450px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    fontFamily: {
      Urbanist: ["Urbanist", "sans-serif"],
    },
    colors: {
      blue: "#121521",
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
