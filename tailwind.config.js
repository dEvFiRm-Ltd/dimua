module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
      colors: {
        white: '#ffffff',
        black: '#0C0D0F',
        green: '#00A23A',
        cyan: '#08AFF4',
        red: '#d6001c',
        orange: '#91E9EF',
        blue: '#004c73',
        gray: '#899296',
        yellow: '#F2BC79',
        ash: '#D9D9D9',
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
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
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
      129: '129px',
      140: '140%',
      180: '180px',
      150: '150%',
      229: '229px',
      318: '318px',
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
