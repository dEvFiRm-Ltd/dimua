import React, { useState, useEffect } from 'react';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Logo from '../assets/img/logo.svg';
import style from '../assets/css/style';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import TabButton from '../components/TabButton';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const { auths } = style;
const Tab = createBottomTabNavigator();

/**
 * @description AuthScreen is the screen that is displayed Login and Signup Screens.
 */
const AuthScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

  const scale = useSharedValue(330);
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
    scale.value = withTiming(keyboardStatus ? 100 : 330, { duration: 500 });
    heights.value = withTiming(keyboardStatus ? 90 : 150, { duration: 500 });
  }, [keyboardStatus]);

  // console.log(keyboardStatus);
  const tabs = [
    { route: 'login', title: 'Login', component: LoginScreen },
    { route: 'signup', title: 'Signup', component: SignupScreen },
  ];
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={auths.container}>
          <Animated.View style={[auths.upperContainer, animatedStyle]}>
            <Animated.View style={[auths.imgContainer, logoAnimation]}>
              <Logo width='100%' height='100%' />
            </Animated.View>
          </Animated.View>

          <Tab.Navigator
            initialRouteName='Login'
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#000000',
              tabBarLabelStyle: { fontSize: 16 },
              tabBarStyle: {
                position: 'absolute',
                top: 10,
                left: 0,
                right: 0,
                backgroundColor: 'transparent',
                shadowOpacity: 0,
                borderBottomStartRadius: 20,
                borderBottomEndRadius: 20,
              },
            }}
          >
            {tabs.map((tab, i) => (
              <Tab.Screen
                key={i}
                name={tab.title}
                component={tab.component}
                options={{
                  tabBarShowLabel: false,
                  tabBar: (props) => <TabButton {...props} item={tab} />,
                }}
              />
            ))}
          </Tab.Navigator>
        </View>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
};

export default AuthScreen;
