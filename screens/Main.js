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
      <View style={{ backgroundColor: color.red, flex: 1 }}>
        <Drawer.Navigator
          initialRouteName='Home'
          screenOptions={{
            headerShown: false,
            drawerType: 'slide',
            drawerStyle: { backgroundColor: 'transparent' },
            overlayColor: 'transparent',
            drawerActiveBackgroundColor: color.red,
            drawerinctiveBackgroundColor: color.red,
            drawerActiveTintColor: color.white,
            drawerInactiveTintColor: color.black,
            sceneContainerStyle: {
              backgroundColor: 'transparent',
            },
          }}
        >
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Notifications' component={HomeScreen} />
        </Drawer.Navigator>
      </View>
    </NavigationContainer>
  );
}
