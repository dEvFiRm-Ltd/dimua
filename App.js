import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import style from './assets/css/style';
import Logo from './assets/img/logo.svg';
import { RotationHoleLoader } from 'react-native-indicator';
const { loading } = style;
const App = () => {
  useEffect(() => {}, []);

  return (
    <View style={loading.container}>
      <ImageBackground
        source={require('./assets/img/loader.jpg')}
        resizeMode='cover'
        style={loading.background}
      >
        <View style={loading.section}>
          <Logo width='40%' height='40%' style={loading.logo} />
          <Text style={loading.title}>Food for Everyone</Text>
          <RotationHoleLoader color={'#FF470B'} size={50} />
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
