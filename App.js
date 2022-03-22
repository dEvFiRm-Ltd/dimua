import React from 'react';
import { View, Image, StatusBar } from 'react-native';
import Logo from './assets/img/logo.svg';
let color = '#FF4B3A';
const App = () => {
  return (
    <>
      <StatusBar backgroundColor={color} />
      <View style={{ backgroundColor: color, flex: 1 }}>
        <View
          style={{
            padding: 49,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <View
            style={{
              width: 73,
              height: 73,
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 50,
              backgroundColor: '#ffffff',
            }}
          >
            <Logo width='100%' height='100%' />
          </View>
        </View>
      </View>
    </>
  );
};

export default App;
