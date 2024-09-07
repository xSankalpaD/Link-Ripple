/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'black-orange-black': 'linear-gradient(to right, black, orange, black)',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'none',
          },
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'none',
          },
        },
        'image-glow': {
          '0%': {
            opacity: '0',
            animationTimingFunction: 'cubic-bezier(.74,.25,.76,1)',
          },
          '10%': {
            opacity: '.7',
            animationTimingFunction: 'cubic-bezier(.12,.01,.08,.99)',
          },
          '100%': {
            opacity: '.4',
          },
        },
        'border-beam': {
          '100%': {
            offsetDistance: '100%',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in 1s var(--animation-delay, 0ms) ease forwards',
        'fade-up': 'fade-up 1s var(--animation-delay, 0ms) ease forwards',
        'image-glow': 'image-glow 4.1s ease-out .6s forwards',
        'border-beam': 'border-beam 12s infinite linear',
      },
    },
  },
  plugins: [
    
  ],
}

