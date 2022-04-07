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
import SearchFailed from './screens/SearchFailed';
import HistoryFailed from './screens/HistoryFailed';
import OrderBlank from './screens/OrderBlank';
import NoInternet from './screens/NoInternet';
const App = () => {
  return (
    <View style={{ backgroundColor: color.base, flex: 1 }}>
      {/* <MainScreen /> */}
      {/* <AuthScreen /> */}
      {/* <ProductDetails /> */}
      {/* <SearchResult /> */}
      {/* <SearchFailed /> */}
      {/* <HistoryFailed /> */}
      {/* <OrderBlank /> */}
      <NoInternet />
      {/* <Profile /> */}
      {/* <Delivery /> */}
      {/* <Payment /> */}
    </View>
  );
};

export default App;
