/** @type {import('tailwindcss').Config} */
export default {
 content: [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
    border: "white",
    headerBg: "#ffffffcc", // Blanc avec transparence
    footerBg: "#111827", // Gris foncé
    footerText: "#d1d5db", // Gris clair pour le texte
    borderColor: "#1f2937", // Gris foncé pour les bordures
    darkPurple: "#4B0082", // Mauve très foncé
   },
  },
 },
 plugins: [],
};
