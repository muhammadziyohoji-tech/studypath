// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00FF41',
        'cyber-green-dark': '#00CC34',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(0, 255, 65, 0.8)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(0, 255, 65, 0.5)',
        'neon-green-lg': '0 0 40px rgba(0, 255, 65, 0.6)',
      },
    },
  },
  plugins: [],
};