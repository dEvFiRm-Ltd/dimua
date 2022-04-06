import { View, Image, FlatList } from 'react-native';
import React, { useRef, useState } from 'react';
import style, { color } from '../assets/css/style';
const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatlistRef = useRef(null);
  // const { width, height } = Dimensions.get('window');
  const onViewRef = useRef(({ changed }) => {
    if (changed[0].isViewable) {
      setCurrentIndex(changed[0].index);
    }
  });
  return (
    <>
      <FlatList
        style={{ flexGrow: 0 }}
        horizontal
        pagingEnabled
        keyExtractor={(item, index) => index.toString()}
        viewabilityConfig={{ viewAreaCoveragePercentThreshold: 95 }}
        ref={(ref) => {
          flatlistRef.current = ref;
        }}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        data={data}
        renderItem={({ item, index, separators }) => {
          const imgUrl = { uri: item.image };
          return (
            <View
              key={index}
              style={{
                width: 241,
                height: 241,
                margin: 30,
                borderRadius: 241 / 2,
                overflow: 'hidden',
                shadowColor: color.black,
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 2,
                elevation: 15,
              }}
            >
              <Image
                source={imgUrl}
                resizeMode='stretch'
                style={{ width: null, height: null, flex: 1 }}
              />
            </View>
          );
        }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {data.map((item, index) => (
          <View
            key={index}
            style={{
              width: 15,
              height: 15,
              borderRadius: 15 / 2,
              backgroundColor: index === currentIndex ? color.red : color.ash,
            }}
          />
        ))}
      </View>
    </>
  );
};

export default Slider;
