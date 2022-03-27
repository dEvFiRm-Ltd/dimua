import React from 'react';
import { View } from 'react-native';
import { color } from './assets/css/style';
import MainScreen from './screens/Main';
const App = () => {
  return (
    <View style={{ backgroundColor: color.base, flex: 1 }}>
      <MainScreen />
    </View>
  );
};

export default App;
