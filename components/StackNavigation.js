import { View, Text } from 'react-native';
import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import Delivery from '../screens/Delivery';
import HistoryFailed from '../screens/HistoryFailed';
import NoInternet from '../screens/NoInternet';
import OrderBlank from '../screens/OrderBlank';
import Profile from '../screens/Profile';
import SearchFailed from './SearchFailed';
import SearchResult from '../screens/SearchResult';
import Onboarding from '../screens/Onboarding';
import Loader from '../screens/Loader';
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Search'
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Auth' component={AuthScreen} />
      <Stack.Screen name='Delivery' component={Delivery} />
      <Stack.Screen name='NoHistory' component={HistoryFailed} />
      <Stack.Screen name='NoNetwork' component={NoInternet} />
      <Stack.Screen name='NoOrder' component={OrderBlank} />
      <Stack.Screen name='Profile' component={Profile} />
      <Stack.Screen name='NoItem' component={SearchFailed} />
      <Stack.Screen name='Search' component={SearchResult} />
      <Stack.Screen name='SplashScreen' component={Onboarding} />
      <Stack.Screen name='Loader' component={Loader} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
