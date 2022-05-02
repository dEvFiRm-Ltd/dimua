import * as React from 'react';
import {
  Animated as NativeAnimated,
  View,
  Text,
  Pressable,
} from 'react-native';
import { color } from '../css/style';

export default function TabBar({ state, descriptors, navigation, position }) {
  return (
    <View
      style={{
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: color.ash,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        overflow: 'hidden',
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const animationValue = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1 : 0)),
        });

        return (
          <Pressable
            key={index}
            onLongPress={onLongPress}
            onPress={onPress}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
              {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                alignContent: 'center',
                paddingVertical: 10,
              },
            ]}
          >
            <Text
              style={{
                fontSize: 18,
                fontFamily: 'SF-Pro-Rounded-Semibold',
              }}
            >
              {label}
            </Text>
            <NativeAnimated.View
              style={{
                height: 2,
                backgroundColor: color.red,
                width: '40%',
                transform: [{ scaleX: animationValue }],
                position: 'absolute',
                bottom: 0,
              }}
            ></NativeAnimated.View>
          </Pressable>
        );
      })}
    </View>
  );
}
