import * as React from 'react';
import { LogBox, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import { color } from '../assets/css/style';
import Drawers from '../components/Drawers';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <View style={{ backgroundColor: color.red, flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => {
            return <Drawers {...props} />;
          }}
          screenOptions={{
            headerShown: false,
            swipeEnabled: false,
            drawerType: 'slide',
            overlayColor: 'transparent',
            drawerStyle: {
              backgroundColor: color.ash,
            },
            sceneContainerStyle: {
              backgroundColor: 'transparent',
            },
          }}
          initialRouteName='Home'
        >
          <Drawer.Screen name='Home'>
            {(props) => <HomeScreen {...props} />}
          </Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}
