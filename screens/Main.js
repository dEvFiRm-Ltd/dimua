import * as React from 'react';
import { Button, LogBox, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { color } from '../assets/css/style';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

export default function MainScreen() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          swipeEnabled: false,
          drawerType: 'back',
          drawerStyle: {
            backgroundColor: color.red,
          },
          sceneContainerStyle: {},
        }}
        initialRouteName='Home'
      >
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Profile' component={HomeScreen} />
        <Drawer.Screen name='Orders' component={HomeScreen} />
        <Drawer.Screen name='Offers &amp; Promotions' component={HomeScreen} />
        <Drawer.Screen name='Privacy policy' component={HomeScreen} />
        <Drawer.Screen name='Security' component={HomeScreen} />
        <Drawer.Screen name='Sign Out' component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
