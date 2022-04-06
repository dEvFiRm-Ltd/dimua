import { View, Text, Image } from 'react-native';
import React from 'react';
import style, { color } from '../assets/css/style';
const { product } = style;
const SingleProducts = ({ data }) => {
  return (
    <View style={product.container}>
      <View style={product.image}>
        <Image
          source={data.image}
          resizeMode='contain'
          style={{ width: null, height: null, flex: 1 }}
        />
      </View>
      <Text style={product.title}>{data.title}</Text>
      <Text style={product.price}>{data.price}</Text>
    </View>
  );
};

export default SingleProducts;
