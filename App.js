import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Immersive } from 'react-native-immersive';
const App = () => {
  Immersive.on();
  return (
    <View>
      <Text>Your Contents</Text>
    </View>
  );
};

export default App;
