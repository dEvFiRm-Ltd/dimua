import React from 'react';
import { View } from 'react-native';
import { color } from './assets/css/style';
import AuthScreen from './screens/AuthScreen';
import Delivery from './screens/Delivery';
import MainScreen from './screens/Main';
import Payment from './screens/Payment';
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
      {/* <Delivery /> */}
      <Payment />
    </View>
  );
};

export default App;
