/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        // Brand Colors (Bright, Clean, Friendly)
        primary: '#2AA952',         // Fresh green (main CTA, tabs)
        secondary: '#FFB300',       // Amber yellow (badges, highlights)
        accent: '#FF6F00',          // Warm orange (top badges, warnings)
        accentSoft: '#FFEBC2',      // Light amber background (for tags)

        // Backgrounds
        background: '#FFFFFF',      // Main background (clean white)
        surface: '#F9FAFB',         // Light cards, containers
        gradientStart: '#F2FFF7',   // Soft greenish white
        gradientEnd: '#E6FFE8',     // End for subtle gradients

        // Text
        text: '#1E1E1E',            // Primary text (deep gray/black)
        textSecondary: '#4B5563',   // Muted text (gray-600)

        // UI & Border
        border: '#E5E7EB',          // Neutral border color
        shadow: 'rgba(0, 0, 0, 0.05)',

        // Status Colors
        success: '#4CAF50',         // Confirmations
        warning: '#FB8C00',         // Warnings
        error: '#E53935',           // Errors
        info: '#039BE5',            // Info & prompts

        // Special Effects
        glow: 'rgba(42, 169, 82, 0.15)', // Light green glow
        highlight: '#ECFDF5',       // Selected or active UI
      },

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },




      keyframes: {

         pulse: {
      '0%, 100%': { opacity: '1' },
      '50%': { opacity: '0.5' },
    },

        shine: {
          '0%': { 'background-position': '100%' },
          '100%': { 'background-position': '-100%' },
        },

        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },

        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },

        floatFadePause: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '20%': { opacity: '1', transform: 'translateY(0)' },
          '80%': { opacity: '1', transform: 'translateY(0)' },
          '81%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatFadePauseDelayed: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '10%': { opacity: '0', transform: 'translateY(30px)' }, // slight delay
          '30%': { opacity: '1', transform: 'translateY(0)' },
          '80%': { opacity: '1', transform: 'translateY(0)' },
          '81%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      animation: {

 'fade-in-up': 'fadeInUp 0.3s ease-out',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
 shine: 'shine 5s linear infinite',

       'custom-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 10s linear infinite',
        floatFadePause: 'floatFadePause 4s ease-in-out forwards',
        floatFadePauseDelayed: 'floatFadePauseDelayed 4s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
