/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX files in the src folder
    "./public/index.html",         // Include the public index file
  ],
  theme: {
    extend: {
      colors: {
        admin: '#1E40AF',
        worker: '#10B981',
        customer: '#F59E0B',
        'custom-blue': '#1e40af',
        'primary-cyan': '#006064',
        'secondary-cyan': '#00838f',
        'custom-green': '#10b981',
        'custom-font-grey': '#9e9e9e',
        'bgColor': '#efebe9'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],  // Use Poppins as the default sans-serif font
      },
    },
  },
  plugins: [],
}

