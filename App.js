import React from 'react';
import { View } from 'react-native';
import { color } from './assets/css/style';
import AuthScreen from './screens/AuthScreen';
import Checkout from './screens/Checkout';
import MainScreen from './screens/Main';
import ProductDetails from './screens/ProductDetails';
import Profile from './screens/Profile';
import SearchResult from './screens/SearchResult';
const App = () => {
  return (
    <View style={{ backgroundColor: color.base, flex: 1 }}>
      {/* <MainScreen /> */}
      {/* <AuthScreen /> */}
      {/* <ProductDetails /> */}
      {/* <SearchResult /> */}
      {/* <Profile /> */}
      <Checkout />
    </View>
  );
};

export default App;
