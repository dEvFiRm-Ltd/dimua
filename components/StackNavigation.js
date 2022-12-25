import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import Delivery from '../screens/Delivery';
import HistoryFailed from '../screens/HistoryFailed';
import NoInternet from '../screens/NoInternet';
import OrderBlank from '../screens/OrderBlank';
import Profile from '../screens/Profile';
import SearchFailed from './SearchFailed';
import SearchResult from '../screens/SearchResult';
import Onboarding from '../screens/Onboarding';
import Loader from '../screens/Loader';
import Payment from '../screens/Payment';
import ProductDetails from '../screens/ProductDetails';
import style from '../assets/css/style';
import {useDrawerStatus} from '@react-navigation/drawer';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Cart from '../screens/Cart';
const {home} = style;
const Stack = createStackNavigator();
const StackNavigation = () => {
  const scaleAnimation = useSharedValue(0);
  const isDrawerOpen = useDrawerStatus();
  const animatedParentStyle = useAnimatedStyle(() => {
    const scale = interpolate(scaleAnimation.value, [0, 1], [1, 0.75], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const translateX = interpolate(scaleAnimation.value, [0, 1], [0, -40], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const translateY = interpolate(scaleAnimation.value, [0, 1], [0, 40], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(scaleAnimation.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{scale}, {translateX}, {translateY}],
      borderRadius,
    };
  });
  const animatedStyle = useAnimatedStyle(() => {
    const translateX = interpolate(scaleAnimation.value, [0, 1], [0, 40], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const translateY = interpolate(scaleAnimation.value, [0, 1], [0, -50], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    const borderRadius = interpolate(scaleAnimation.value, [0, 1], [0, 30], {
      extrapolateRight: Extrapolate.CLAMP,
    });
    return {
      transform: [{translateX}, {translateY}],
      borderRadius,
    };
  });
  React.useEffect(() => {
    if (isDrawerOpen === 'open') {
      scaleAnimation.value = withTiming(1, {duration: 500});
    } else {
      scaleAnimation.value = withTiming(0, {duration: 500});
    }
  }, [isDrawerOpen]);

  return (
    <Animated.View
      style={[
        {
          backgroundColor: 'rgba(242, 242, 242, 0.2)',
          flex: 1,
          elevation: 0,
          flexDirection: 'row',
        },
        animatedParentStyle,
      ]}>
      <Animated.View style={[home.container, animatedStyle]}>
        {/* Main Component */}
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Details">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Auth" component={AuthScreen} />
          <Stack.Screen name="Details" component={ProductDetails} />
          <Stack.Screen name="Delivery" component={Delivery} />
          <Stack.Screen name="NoHistory" component={HistoryFailed} />
          <Stack.Screen name="NoNetwork" component={NoInternet} />
          <Stack.Screen name="NoOrder" component={OrderBlank} />
          <Stack.Screen name="Order" component={Cart} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Payment" component={Payment} />
          <Stack.Screen name="NoItem" component={SearchFailed} />
          <Stack.Screen name="Search" component={SearchResult} />
          <Stack.Screen name="SplashScreen" component={Onboarding} />
          <Stack.Screen name="Loader" component={Loader} />
        </Stack.Navigator>

        {/* Main Component */}
      </Animated.View>
    </Animated.View>
  );
};

export default StackNavigation;
