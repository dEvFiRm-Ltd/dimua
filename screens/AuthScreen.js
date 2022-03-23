import React, { useState, useEffect } from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  View,
  Text,
  Pressable,
} from 'react-native';
import Logo from '../assets/img/logo.svg';
import style from '../assets/css/style';
import LoginScreen from '../components/LoginScreen';
import SignupScreen from '../components/SignupScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const { auths } = style;
const Tab = createMaterialTopTabNavigator();
const AuthScreen = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);

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
  console.log(keyboardStatus);
  return (
    <NavigationContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={auths.container}>
          <View
            style={
              keyboardStatus
                ? auths.upperContainer(110)
                : auths.upperContainer(330)
            }
          >
            <View style={auths.imgContainer}>
              <Logo width='100%' height='100%' />
            </View>
          </View>

          <Tab.Navigator
            initialRouteName='Login'
            screenOptions={{
              tabBarActiveTintColor: '#000000',
              tabBarLabelStyle: { fontSize: 16 },
            }}
          >
            <Tab.Screen
              name='Login'
              component={LoginScreen}
              options={{ tabBarLabel: 'Login' }}
            />
            <Tab.Screen
              name='Signup'
              component={SignupScreen}
              options={{ tabBarLabel: 'Signup' }}
            />
          </Tab.Navigator>
        </View>
      </TouchableWithoutFeedback>
    </NavigationContainer>
  );
};

export default AuthScreen;
