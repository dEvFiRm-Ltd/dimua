module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '16px', sm: '8px', xs: '8px' },
    },
    extend: {
      fontFamily: {
        googleRegular: ['google-regular', 'Helvetica', 'Arial', 'sans-serif'],
        googleMedium: ['google-medium', 'Helvetica', 'Arial', 'sans-serif'],
        googleBold: ['google-bold', 'Helvetica', 'Arial', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
      },
      colors: {
        white: '#ffffff',
        black: '#383838',
        green: '#44bd32',
        cyan: '#00baf1',
        red: '#d6001c',
        orange: '#da4f25',
        blue: '#004c73',
        gray: '#899296',
        yellow: '#ffdb1f',
        ash: '#dce3ec',
        base: '#e5ebed',
        borderGray: '#D0D5DD',
        inputColor: '#C1C6C9',
        'text-black': '#3d3f40',
        'text-dark': '#424242',
        'text-blue': '#0097e6',
      },
    },
    screens: {
      xs: { max: '575.98px' },
      // => @media (max-width: 575.98px) { ... }

      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
    },
    spacing: {
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      13: '13px',
      16: '16px',
      19: '19px',
      20: '20px',
    },
  },
  plugins: [],
};
