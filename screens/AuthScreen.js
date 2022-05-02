import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Logo from '../assets/img/logo.svg';
import LoginScreen from '../components/LoginScreen';
import TabBar from '../components/TabBar';
import SignupScreen from '../components/SignupScreen';
import style from '../css/style';

// const { auths } = style;

const Tab = createMaterialTopTabNavigator();

/**
 * @description AuthScreen is the screen that is displayed Login and Signup Screens.
 */

const defaultSize = 250;

const AuthScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const scale = useSharedValue(defaultSize);
  const heights = useSharedValue(150);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      height: scale.value,
    };
  });
  const logoAnimation = useAnimatedStyle(() => {
    return {
      height: heights.value,
      width: heights.value,
    };
  });

  useEffect(() => {
    scale.value = withTiming(keyboardStatus ? 100 : defaultSize, {
      duration: 500,
    });
    heights.value = withTiming(keyboardStatus ? 90 : 150, { duration: 500 });
  }, [keyboardStatus]);

  // console.log(keyboardStatus);
  const tabs = [
    { route: 'login', title: 'Login', component: LoginScreen },
    { route: 'signup', title: 'Signup', component: SignupScreen },
  ];
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View 
      // style={auths.container}
      >
        <Animated.View 
        style={[
          // auths.upperContainer,
           animatedStyle]}>
          <Animated.View 
          style={[
            // auths.imgContainer,
             logoAnimation]}>
            <Logo width='100%' height='100%' />
          </Animated.View>
        </Animated.View>

        <Tab.Navigator
          initialRouteName='Login'
          tabBar={(props) => <TabBar {...props} />}
        >
          {tabs.map((tab, i) => (
            <Tab.Screen key={i} name={tab.title} component={tab.component} />
          ))}
        </Tab.Navigator>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AuthScreen;
