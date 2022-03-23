import React, { useEffect, useState } from 'react';
import { Pressable, Text, View, Keyboard } from 'react-native';
import style, { color } from '../assets/css/style';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import TextInput from 'react-native-material-textinput';
const { forms } = style;

/**
 * @description LoginScreen is the screen that is displayed Login Screen.
 */
const Login = () => {
  const [keyboardStatus, setKeyboardStatus] = useState(false);
  const [name, setName] = useState('');
  const heights = useSharedValue(23);

  const handleInputChange = (value) => setName(value);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  const gapAnimation = useAnimatedStyle(() => {
    return {
      marginVertical: heights.value,
    };
  });

  useEffect(() => {
    heights.value = withTiming(keyboardStatus ? 13 : 23, { duration: 500 });
  }, [keyboardStatus]);

  return (
    <View style={forms.container}>
      <Animated.View style={[forms.input, gapAnimation]}>
        <TextInput
          label='Email Address'
          value={name}
          labelActiveColor={color.ash}
          labelColor={color.ash}
          underlineActiveColor={color.ash}
          underlineColor={color.ash}
          onChangeText={handleInputChange}
          autoFocus={true}
          // keyboardType='email-address'
          // secureTextEntry={true}
        />
      </Animated.View>
      <Animated.View style={[forms.input, gapAnimation]}>
        <TextInput
          label='Password'
          value={name}
          labelActiveColor={color.ash}
          labelColor={color.ash}
          underlineActiveColor={color.ash}
          underlineColor={color.ash}
          onChangeText={handleInputChange}
          // keyboardType='email-address'
          secureTextEntry={true}
        />
      </Animated.View>
      <Pressable>
        <Text style={forms.btn}> forgot password ! </Text>
      </Pressable>
    </View>
  );
};

export default Login;
