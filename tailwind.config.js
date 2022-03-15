module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'moisturizer-bg': "url('./assets/moisturizer-bg.jpg')",
        'shampoo-bg': "url('./assets/shampoo-bg.jpg')",
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'slide-left': 'slide 1s ease-in-out 1',
      },
    },
  },
  plugins: [],
}
