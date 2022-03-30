import * as React from 'react';
import { LogBox, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { color } from '../assets/css/style';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => {
          // animationValue.value = props.progress;
          console.log(props.progress);
          return <Drawers {...props} />;
        }}
        screenOptions={{
          headerShown: false,
          swipeEnabled: false,
          drawerType: 'slide',
          overlayColor: 'transparent',
        }}
        sceneContainerStyle={{
          backgroundColor: color.red,
        }}
        drawerContentOptions={{
          activeTintColor: color.red,
          inactiveTintColor: color.red,
          activeBackgroundColor: 'transparent',
          inactiveBackgroundColor: color.red,
        }}
        initialRouteName='Home'
      >
        <Drawer.Screen name='Home'>
          {(props) => <HomeScreen {...props} scaleValue={scaledStyle} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
