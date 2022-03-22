import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Logo from '../assets/img/logo.svg';
import style from '../assets/css/style';
const { auths } = style;
const AuthScreen = () => {
  return (
    <View style={auths.container}>
      <View style={auths.upperContainer}>
        <View style={auths.imgContainer}>
          <Logo width='100%' height='100%' />
        </View>
        <View style={auths.btnArea}>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
            ]}
          >
            <Text>Pressing</Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',
              },
            ]}
          >
            <Text>Pressed!</Text>
          </Pressable>
        </View>
      </View>
      <View style={auths.lowerContainer}>
        <Text>Your Contents</Text>
      </View>
    </View>
  );
};

export default AuthScreen;
