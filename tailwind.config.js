const { transform } = require("typescript");

module.exports = {
  theme: {
    extend: {
      colors: {
        principal: "#41160d", verdeClaro: "#804020", verdeClarinho: "#4f710f", 
      },
      aniamtion: {
        'fade-in': 'fadeIn 0.3s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'transleteY(0)'},
        },
      },
    },
  },
  plugins: [],
};