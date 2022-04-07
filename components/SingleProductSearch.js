import { View, Text, Image } from 'react-native';
import React from 'react';
import style from '../assets/css/style';
const { productSearch } = style;
const SingleProductsSearch = ({ data }) => {
  const imgUrl = { uri: data.image };
  return (
    <View style={productSearch.container}>
      <View style={productSearch.image}>
        <Image
          source={imgUrl}
          resizeMode='contain'
          style={{ width: null, height: null, flex: 1 }}
        />
      </View>
      <Text numberOfLines={2} ellipsizeMode='tail' style={productSearch.title}>
        {data.title}
      </Text>
      <Text style={productSearch.price}>{data.price}</Text>
    </View>
  );
};

export default SingleProductsSearch;
