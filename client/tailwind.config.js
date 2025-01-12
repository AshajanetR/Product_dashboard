/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on your file structure
  ],
  theme: {
    extend: {
      colors:{
        green:'#00796B',
        lightgreen:'#ccede9',
        hovergreen:'#00897B',
        geryblack:'#555555',
      }
    },
  },
  plugins: [],
};