import * as React from 'react';
import { Button, View } from 'react-native';
import { color } from '../assets/css/style';
import { useDrawerProgress } from '@react-navigation/drawer';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateNode,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function HomeScreen({ navigation }) {
  const progress = useDrawerProgress();
  const scale = interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [1, 0.8],
    extrapolate: Extrapolate.CLAMP,
  });
  const borderRadius = interpolateNode(progress.value, {
    inputRange: [0, 1],
    outputRange: [1, 20],
    extrapolate: Extrapolate.CLAMP,
  });
  const animatedStyle = {
    borderRadius,
    transform: [{ scale }],
  };

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          elevation: 10,
          overflow: 'hidden',
          backgroundColor: color.base,
        },
        animatedStyle,
      ]}
    >
      <Button onPress={() => navigation.toggleDrawer()} title='aaslem' />
    </Animated.View>
    // <View style={{ flex: 1, backgroundColor: color.base }}>
    //   <Button onPress={() => navigation.toggleDrawer()} title='alem' />
    // </View>
  );
}
