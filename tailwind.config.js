/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3B5BFF",
          deep: "#2743C7",
          tint: "#EEF2FF",
        },
        accent: {
          DEFAULT: "#FF7A3D",
          tint: "#FFF3EC",
        },
        green: {
          brand: "#16A34A",
        },
        ink: "#0E1526",
        muted: "#5B6478",
        soft: "#F7F6FF",
        line: "#E8ECF4",
        nav: "#DBDCE0",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      borderRadius: {
        brand: "16px",
      },
      boxShadow: {
        card: "0 4px 24px -8px rgba(14,21,38,0.12)",
        deep: "0 24px 48px -30px rgba(14,21,38,0.2)",
      },
      maxWidth: {
        brand: "1160px",
      },
    },
  },
  plugins: [],
};