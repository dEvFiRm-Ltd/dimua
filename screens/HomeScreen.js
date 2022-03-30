import * as React from 'react';
import { Button, View } from 'react-native';
import { color } from '../assets/css/style';
import { useDrawerStatus } from '@react-navigation/drawer';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

export default function HomeScreen({ navigation }) {
  const scaleAnimation = useSharedValue(1);
  const isDrawerOpen = useDrawerStatus();
  console.log('isDrawerOpen', isDrawerOpen);
  const animateScale = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scaleAnimation.value }],
    };
  });
  return (
    <Animated.View
      style={[
        {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color.base,
          transform: [{ scale: 0.75 }],
          borderRadius: 15,
        },
      ]}
    >
      <Button onPress={() => navigation.toggleDrawer()} title='alem' />
    </Animated.View>
  );
}
