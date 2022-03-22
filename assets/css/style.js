import { StyleSheet } from 'react-native';

export const color = {
  white: '#ffffff',
  base: '#f2f2f2',
  black: '#000000',
  red: '#FF4B3A',
  cream: '#EFEEEE',
  ash: '#9A9A9D',
};
// export const spacing = [65, 34, 28, 22, 18, 17, 15, 13, 10];
export const leading = {
  '3xs': 56.44,
  '2xs': 40.57,
  xs: 33.41,
  sm: 22.29,
  md: 21.48,
  lg: 20.29,
  xl: 17.9,
  '2xl': 15.51,
  '3xl': 11.93,
};

const bold = {
  fontFamily: 'SF-Pro-Rounded-Bold',
};
const heavy = {
  fontFamily: 'SF-Pro-Rounded-Heavy',
};
const regular = {
  fontFamily: 'SF-Pro-Rounded-Regular',
};
const semibold = {
  fontFamily: 'SF-Pro-Rounded-Semibold',
};

const h1 = {
  fontSize: 65,
  lineHeight: 56.44,
  color: '#ffffff',
  ...heavy,
};
const h2 = {
  fontSize: 34,
  lineHeight: 40.57,
  color: '#ffffff',
  ...bold,
};
const h3 = {
  fontSize: 28,
  lineHeight: 33.41,
  color: '#ffffff',
  ...bold,
};
const h4 = {
  fontSize: 22,
  lineHeight: 22.29,
  color: '#ffffff',
  ...semibold,
};
const h5 = {
  fontSize: 18,
  lineHeight: 21.48,
  color: '#ffffff',
  ...semibold,
};
const h6 = {
  fontSize: 17,
  lineHeight: 20.29,
  color: '#ffffff',
  ...semibold,
};
const h7 = {
  fontSize: 15,
  lineHeight: 17.9,
  color: '#ffffff',
  ...semibold,
};
const text1 = {
  fontSize: 15,
  lineHeight: 17.9,
  color: '#ffffff',
  ...regular,
};
const text2 = {
  fontSize: 13,
  lineHeight: 15.51,
  color: '#ffffff',
  ...regular,
};
const text3 = {
  fontSize: 10,
  lineHeight: 11.93,
  color: '#ffffff',
  ...regular,
};

/* Onboarding Screen */
const style = StyleSheet.create({
  onboarding: {
    container: {
      backgroundColor: color.red,
      flex: 1,
      padding: 49,
      display: 'flex',
      flexDirection: 'column',
    },
    imgContainer: {
      width: 73,
      height: 73,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 50,
      backgroundColor: '#ffffff',
    },
    title: { ...h1, paddingLeft: 2, paddingTop: 31 },
  },
});
export default style;
