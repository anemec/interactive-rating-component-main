module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      colors: {
        orangePrim: 'hsl(25, 97%, 53%)',
        whiteNeutral: 'hsl(0, 0%, 100%)',
        lightGreyNeutral: 'hsl(217, 12%, 63%)',
        mediumGreyNeutral: 'hsl(216, 12%, 54%)',
        darkBlueNeutral: 'hsl(213, 19%, 18%)',
        veryDarkBlueNeutral: 'hsl(216, 12%, 8%)',
      },
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
    },
  },
  plugins: [],
};
