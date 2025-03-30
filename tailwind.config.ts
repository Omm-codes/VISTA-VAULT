/** @type {import('tailwindcss').Config} */ 

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}', // Ensure all files are scanned for classes
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      gridTemplateColumns: {
        'gallery': 'repeat(auto-fit, minmax(250px, 1fr))',
      },
    },
  },
  plugins: [],
}