import { Dimensions, Pressable, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { color } from '../assets/css/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Carousel, {
  Pagination,
  ParallaxImage,
} from 'react-native-snap-carousel';

const ENTRIES1 = [
  {
    title: 'Beautiful and dramatic Antelope Canyon',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/UYiroysl.jpg',
  },
  {
    title: 'Earlier this morning, NYC',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/UPrs1EWl.jpg',
  },
  {
    title: 'White Pocket Sunset',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
    illustration: 'https://i.imgur.com/MABUbpDl.jpg',
  },
  {
    title: 'Acrocorinth, Greece',
    subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
    illustration: 'https://i.imgur.com/KZsmUi2l.jpg',
  },
  {
    title: 'The lone tree, majestic landscape of New Zealand',
    subtitle: 'Lorem ipsum dolor sit amet',
    illustration: 'https://i.imgur.com/2nCt3Sbl.jpg',
  },
];
const { width: screenWidth } = Dimensions.get('window');

const renderItem = ({ item, index }, parallaxProps) => {
  return (
    <View>
      <ParallaxImage
        source={{ uri: item.illustration }}
        parallaxFactor={0.4}
        {...parallaxProps}
      />
      <Text numberOfLines={2}>{item.title}</Text>
    </View>
  );
};

const ProductDetails = () => {
  const [entries, setEntries] = useState([]);
  const [activeSlide, setActiveSlide] = useState();
  const carouselRef = useRef(null);

  const goForward = () => {
    carouselRef.current.snapToNext();
  };

  useEffect(() => {
    setEntries(ENTRIES1);
  }, []);

  const Paginations = () => {
    return (
      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeSlide}
        containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: 'rgba(255, 255, 255, 0.92)',
        }}
        inactiveDotStyle={
          {
            // Define styles for inactive dots here
          }
        }
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  };

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
      <View>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={entries}
          renderItem={renderItem}
          hasParallaxImages={true}
          onSnapToItem={(index) => setActiveSlide(index)}
        />
        <Paginations />
      </View>
    </View>
  );
};

export default ProductDetails;
