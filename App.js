import React from 'react';
import AuthScreen from './screens/AuthScreen';
import { View } from 'react-native';
import { color } from './assets/css/style';
const App = () => {
  return (
    <View style={{ backgroundColor: color.base, flex: 1 }}>
      <AuthScreen />
    </View>
  );
};

export default App;
