/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
   
    extend: {
      colors:{
        'rtn':'#0A4D68',
        'saliha':'#05BFDB',
        'ayoub':'#AAC8A7',
        'ayoubb':'#088395',
        'salihaa':'#5D3891',
        'bginp':'#B9F3FC',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatible: true }),],
}