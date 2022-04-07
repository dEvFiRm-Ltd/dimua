import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import style, { color } from '../assets/css/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { products } from '../mocks/data';
import SingleProductSearch from '../components/SingleProductSearch';
const { productDetails } = style;

const SearchDetails = () => {
  const [fev, setFev] = useState(false);

  useEffect(() => {
    setFev(false);
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: color.base,
        paddingTop: 40,
      }}
    >
      <View
        style={{
          paddingHorizontal: 40,
          justifyContent: 'flex-start',
          flexDirection: 'row',
          marginBottom: 37,
        }}
      >
        <Pressable style={{ padding: 6, marginRight: 30 }}>
          <FontAwesome5 name='chevron-left' regular size={18} />
        </Pressable>
        <TextInput
          placeholder='searched'
          style={{
            paddingVertical: 6,
            marginTop: -6,
            fontSize: 16,
            textTransform: 'capitalize',
          }}
        />
      </View>
      <ScrollView
        style={{
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          backgroundColor: '#f9f9f9',
          padding: 34,
          paddingBottom: 90,
        }}
        contentContainerStyle={{ flexWrap: 'wrap', flexDirection: 'row' }}
      >
        {products.map((product, index) => {
          return (
            <View
              key={index}
              style={{
                width: 160,
                height: 280,
                paddingTop: 70,
                paddingHorizontal: 10,
                marginTop: index % 2 === 0 ? 10 : 65,
              }}
            >
              <SingleProductSearch data={product} rank={index} />
            </View>
          );
        })}
      </ScrollView>
    </ScrollView>
  );
};

export default SearchDetails;
