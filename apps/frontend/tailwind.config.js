/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#b6894a',
        primary: '#15577a',      // Brand Deep Blue
        secondary: '#eab308',    // Amber-500
        accent: '#14b8a6',       // Teal-500
        muted: '#f3f4f6',        // Gray-100
        dark: '#1e293b',         // Slate-800
        light: '#f9fafb',        // Gray-50
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 2px 8px 0 rgba(0,0,0,0.07)',
      },
    },
  },
  plugins: [],
}
