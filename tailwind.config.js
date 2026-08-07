/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#0B0B0B",
        bgSecondary: "#121212",
        cardBg: "#171717",
        accent: "#FF6B00",
        accentSecondary: "#FF8C3A",
        textPrimary: "#F8F8F8",
        textSecondary: "#9E9E9E",
        glassBorder: "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        '28': '28px',
      },
      spacing: {
        '120': '120px',
      },
    },
  },
  plugins: [],
}
