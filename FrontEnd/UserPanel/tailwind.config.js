module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    container: {
      center: true,
      padding: { lg: '16px', default: '8px' },
    },
    fontSize: {
      xs: ['12px', '18px'],
      sm: ['13px', '19px'],
      md: ['14px', '20px'],
      lg: ['15px', '18px'],
      xl: ['16px', '24px'],
      '2xl': ['18px', '18px'],
      '3xl': ['24px', '29px'],
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
      backgroundImage: {
        topSelling: `url('../public/img/top-selling.jpg')`,
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
      0: '0',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      13: '13px',
      14: '14px',
      16: '16px',
      19: '19px',
      20: '20px',
      24: '24px',
      30: '30px',
      32: '32px',
      36: '36px',
      60: '60px',
      120: '120%',
      140: '140%',
      150: '150%',
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant('third', '&:nth-child(3n)');
      addVariant('fourth', '&:nth-child(4n)');
      addVariant('fifth', '&:nth-child(5n)');
      addVariant('sixth', '&:nth-child(6n)');
    },
  ],
};