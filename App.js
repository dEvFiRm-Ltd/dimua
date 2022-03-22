import React from 'react';
import { View, StatusBar, Text } from 'react-native';
import Logo from './assets/img/logo.svg';
import style, { color } from './assets/css/style';
const { onboarding } = style;
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={color.red} />
      <View style={onboarding.container}>
        <View style={onboarding.imgContainer}>
          <Logo width='100%' height='100%' />
        </View>
        <View>
          <Text style={onboarding.title}>Food for Everyone</Text>
        </View>
      </View>
    </>
  );
};

export default App;
