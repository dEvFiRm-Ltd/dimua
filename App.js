import React from 'react';
import { View } from 'react-native';
import { color } from './assets/css/style';
import AuthScreen from './screens/AuthScreen';
// import MainScreen from './screens/Main';
const App = () => {
  return (
    <View style={{ backgroundColor: color.base, flex: 1 }}>
      {/* <MainScreen /> */}
      <AuthScreen />
    </View>
  );
};

export default App;
