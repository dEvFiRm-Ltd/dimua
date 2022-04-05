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
  const animatedParentStyle = useAnimatedStyle(() => {
    const scale = interpolate(scaleAnimation.value, [0, 1], [1, 0.75], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const translateX = interpolate(scaleAnimation.value, [0, 1], [0, -40], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const translateY = interpolate(scaleAnimation.value, [0, 1], [0, 40], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(scaleAnimation.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{ scale }, { translateX }, { translateY }],
      borderRadius,
    };
  });
  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(scaleAnimation.value, [0, 1], [0, 40], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const translateY = interpolate(scaleAnimation.value, [0, 1], [0, -50], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(scaleAnimation.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{ translateX }, { translateY }],
      borderRadius,
    };
  });
  React.useEffect(() => {
    if (isDrawerOpen === 'open') {
      scaleAnimation.value = withTiming(1, { duration: 500 });
    } else {
      scaleAnimation.value = withTiming(0, { duration: 500 });
    }
  }, [isDrawerOpen]);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'rgba(242, 242, 242, 0.2)',
          flex: 1,
          elevation: 0,
        },
        animatedParentStyle,
      ]}
    >
      <Animated.View
        style={[
          {
            flex: 1,
            elevation: 0,
            overflow: 'hidden',
            backgroundColor: color.base,
          },
          animatedStyle,
        ]}
      >
        <Button onPress={() => navigation.toggleDrawer()} title='alem' />
      </Animated.View>
    </Animated.View>
  );
}
