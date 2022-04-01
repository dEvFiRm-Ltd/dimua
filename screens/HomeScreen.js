import * as React from 'react';
import { Button, View } from 'react-native';
import { color } from '../assets/css/style';
import { useDrawerStatus } from '@react-navigation/drawer';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function HomeScreen({ navigation }) {
  const scaleAnimation = useSharedValue(0);
  const isDrawerOpen = useDrawerStatus();
  const animatedStyle = useAnimatedStyle(() => {
    const scaled = interpolate(scaleAnimation.value, [0, 1], [1, 0.8], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const translates = interpolate(scaleAnimation.value, [0, 1], [0, 60], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const radious = interpolate(scaleAnimation.value, [0, 1], [0, 15], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{ scale: scaled }, { translateY: translates }],
      borderRadius: radious,
    };
  });
  React.useEffect(() => {
    if (isDrawerOpen === 'open') {
      scaleAnimation.value = withTiming(1, { duration: 500 });
    } else {
      scaleAnimation.value = withTiming(0, { duration: 500 });
    }
  }, [isDrawerOpen]);
  console.log('isDrawerOpen', isDrawerOpen);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          backgroundColor: color.base,
          elevation: 10,
        },
        animatedStyle,
      ]}
    >
      <Button onPress={() => navigation.toggleDrawer()} title='alem' />
    </Animated.View>
  );
}
