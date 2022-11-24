/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        '63': '.63',
      },
    },
    screens: {
      mobile: '375px',
      tablet: '768px',
      desktop: '1440px',
    },
    colors: {
      primary: '#66E2DC',
      secondary: '#FA7453',
      tertiary: '#FFB964',
      whitish: '#FCFAF9',
      blackish: '#191826',
    },
    fontSize: {
      'heading-1': ['5.5rem', {
        lineHeight: '5.5rem',
        letterSpacing: '-0.063rem',
        fontWeight: 700,
      }],
      'heading-2': ['2.5rem', {
        lineHeight: '3.25rem',
        fontWeight: 700,
      }],
      'body-1': ['1.25rem', {
        fontWeight: 400,
        lineHeight: '2.125rem',
      }],
      'body-2': ['1rem', {
        fontWeight: 400,
        lineHeight: '1.625rem',
      }],
      'button': ['1rem', {
        lineHeight: '2rem',
        fontWeight: 700,
        paragraphSpacing: '0.063rem',
        letterSpacing: '-0.011rem',
      }],
      'price': ['4.063rem', {
        lineHeight: '3.25rem',
        paragraphSpacing: '0.063rem',
        fontWeight: 700,
      }]
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
  },
  plugins: [],
}
