import { Pressable, View } from 'react-native';
import React from 'react';
import { color } from '../assets/css/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Slider from '../components/Slider';

const ProductDetails = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.base,
        padding: 40,
      }}
    >
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginBottom: 10,
        }}
      >
        <Pressable style={{ padding: 6 }}>
          <FontAwesome5 name='chevron-left' regular size={18} />
        </Pressable>
        <Pressable style={{ padding: 12 }}>
          <FontAwesome5 name='heart' regular size={18} />
        </Pressable>
      </View>
      <Slider />
    </View>
  );
};

export default ProductDetails;
