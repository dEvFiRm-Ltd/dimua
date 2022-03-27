import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import style, { color } from '../assets/css/style';
import Logo from '../assets/img/logo.svg';
const { loading } = style;
const Loader = () => {
  useEffect(() => {}, []);

  return (
    <View style={loading.container}>
      <ImageBackground
        source={require('../assets/img/loader.jpg')}
        resizeMode='cover'
        style={loading.background}
      >
        <View style={loading.section}>
          <Logo width='40%' height='40%' style={loading.logo} />
          <Text style={loading.title}>Food for Everyone</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Loader;
