import { View, Text, Image, FlatList, Dimensions } from 'react-native';
import React from 'react';
import style, { color } from '../assets/css/style';
const { product } = style;
const Slider = ({ data }) => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <FlatList
      style={{ flexGrow: 0 }}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item, index, separators }) => {
        const imgUrl = { uri: item.image };
        return (
          <View
            key={index}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              width: windowWidth,
              height: 255,
            }}
          >
            <View
              key={index}
              style={{
                width: 241,
                height: 241,
                borderRadius: 241 / 2,
                overflow: 'hidden',
                shadowColor: color.black,
                shadowOffset: { width: 0, height: 4 },
                shadowRadius: 2,
                elevation: 30,
              }}
            >
              <Image
                source={imgUrl}
                resizeMode='stretch'
                style={{ width: null, height: null, flex: 1 }}
              />
            </View>
          </View>
        );
      }}
    />
  );
};

export default Slider;
