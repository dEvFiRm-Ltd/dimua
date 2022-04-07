import React, { useRef, useState, useEffect } from 'react';
import Carousel, {
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import { products } from '../mocks/data';
import { color } from '../assets/css/style';

const { width: screenWidth } = Dimensions.get('window');

const Slider = (props) => {
  const [entries, setEntries] = useState([]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    setEntries(products);
  }, []);

  const renderItem = ({ item }, parallaxProps) => {
    return (
      <View
        style={{
          width: 241,
          height: 241,
          borderRadius: 241 / 2,
          overflow: 'hidden',
          shadowColor: color.black,
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 2,
          elevation: 15,
        }}
      >
        <ParallaxImage
          source={{ uri: item.image }}
          containerStyle={{
            width: null,
            height: null,
            flex: 1,
          }}
          style={{
            resizeMode: 'contain',
          }}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  };

  return (
    <View>
      <Carousel
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 60}
        data={entries}
        onSnapToItem={(index) => setActiveSlide(index)}
        renderItem={renderItem}
        hasParallaxImages={true}
      />
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'transparent' }}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 4,
          marginHorizontal: 6,
          backgroundColor: color.red,
        }}
        inactiveDotStyle={{
          backgroundColor: color.ash,
        }}
        inactiveDotScale={1}
      />
    </View>
  );
};

export default Slider;
