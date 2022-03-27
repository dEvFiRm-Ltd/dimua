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
  ...heavy,
};
const h2 = {
  fontSize: 34,
  lineHeight: 40.57,
  ...bold,
};
const h3 = {
  fontSize: 28,
  lineHeight: 33.41,
  ...bold,
};
const h4 = {
  fontSize: 22,
  lineHeight: 22.29,
  ...semibold,
};
const h5 = {
  fontSize: 18,
  lineHeight: 21.48,
  ...semibold,
};
const h6 = {
  fontSize: 17,
  lineHeight: 20.29,
  ...semibold,
};
const h7 = {
  fontSize: 15,
  lineHeight: 17.9,
  ...semibold,
};
const text1 = {
  fontSize: 15,
  lineHeight: 17.9,
  ...regular,
};
const text2 = {
  fontSize: 13,
  lineHeight: 15.51,
  ...regular,
};
const text3 = {
  fontSize: 10,
  lineHeight: 11.93,
  ...regular,
};

const style = StyleSheet.create({
  /* Onboarding Screen */
  onboarding: {
    container: {
      backgroundColor: color.red,
      flex: 1,
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
    },
    header: {
      paddingLeft: 49,
      paddingTop: 56,
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
      backgroundColor: color.white,
    },
    title: { ...h1, paddingLeft: 2, paddingTop: 31, color: color.white },
    footer: {
      position: 'relative',
      bottom: 0,
      left: 0,
      right: 0,
    },
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 1,
      filter: 'blur(30px)',
      height: 266,
    },
    button: {
      backgroundColor: color.white,
      borderRadius: 50,
      padding: 25,
      width: '70%',
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      bottom: 36,
      position: 'absolute',
    },
    btntxt: {
      ...h6,
      color: color.red,
    },
  },
  /* Loading Screen */
  loading: {
    container: {
      flex: 1,
    },
    background: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    section: {
      width: 262,
      height: 262,
      borderRadius: 262 * 0.5,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: color.white,
    },
    logo: {
      animation: 'spin infinite 20s linear',
    },
    title: { ...text3, color: color.red },
  },
  /* Auth Screen */
  auths: {
    container: {
      flex: 1,
    },
    upperContainer: {
      backgroundColor: color.white,
      width: '100%',
      display: 'flex',
      zIndex: 1,
      TransitionEvent: 'all 0.5s ease-in-out',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    btnArea: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    imgContainer: {
      width: 150,
      height: 150,
    },
    tabBarLabel: {
      fontSize: 18,
      fontFamily: 'SF-Pro-Rounded-Semibold',
      lineHeight: 18,
    },
  },
  forms: {
    container: {
      marginTop: 41,
      display: 'flex',
      alignItems: 'flex-start',
      paddingHorizontal: 50,
    },
    input: {
      width: '100%',
    },
    btn: {
      ...h6,
      color: color.red,
      textTransform: 'capitalize',
    },
    submit: {
      width: 314,
      paddingVertical: 20,
      backgroundColor: color.red,
      borderRadius: 30,
      marginLeft: 'auto',
      marginTop: 40,
      btn: {
        ...h6,
        color: color.white,
        textTransform: 'capitalize',
        textAlign: 'center',
      },
    },
    signup: {
      submit: {
        width: 200,
        paddingVertical: 15,
        backgroundColor: color.red,
        borderRadius: 30,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 15,
        btn: {
          ...h6,
          color: color.white,
          textTransform: 'capitalize',
          textAlign: 'center',
        },
      },
    },
  },
});
export default style;
