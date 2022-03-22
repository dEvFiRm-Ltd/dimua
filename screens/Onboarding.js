import React from 'react';
import { View, StatusBar, Text, Image, Pressable } from 'react-native';
import Logo from '../assets/img/logo.svg';
import LinearGradient from 'react-native-linear-gradient';
import style, { color } from '../assets/css/style';
const { onboarding } = style;
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={color.red} />
      <View style={onboarding.container}>
        <View style={onboarding.header}>
          <View style={onboarding.imgContainer}>
            <Logo width='100%' height='100%' />
          </View>
          <View>
            <Text style={onboarding.title}>Food for Everyone</Text>
          </View>
        </View>
        <View style={onboarding.footer}>
          <LinearGradient
            colors={['rgba(255, 71, 11, 0.1)', '#FF470B']}
            locations={[-0.4, 0.75]}
            style={onboarding.overlay}
          >
            <Pressable style={onboarding.button}>
              <Text style={onboarding.btntxt}>Let's get started!</Text>
            </Pressable>
          </LinearGradient>
          <Image source={require('./assets/img/onboarding.png')} />
        </View>
      </View>
    </>
  );
};

export default App;
