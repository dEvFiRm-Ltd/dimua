import * as React from 'react';
import { Animated, Button, View } from 'react-native';
import { color } from '../assets/css/style';

export default function HomeScreen({ navigation, scaleValue }) {
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color.base,
        },
        scaleValue,
      ]}
    >
      <Button onPress={() => navigation.toggleDrawer()} title='Drawer' />
    </Animated.View>
  );
}
