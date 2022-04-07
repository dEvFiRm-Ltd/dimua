import { Dimensions, Pressable, Text, TextInput, View } from 'react-native';
import React from 'react';
import { color } from '../assets/css/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { height: screenHeight } = Dimensions.get('window');
const SearchFailed = () => {
  return (
    <View
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: screenHeight - 280,
          paddingHorizontal: 88,
        }}
      >
        <FontAwesome5 name='search' light size={75} />
        <Text style={{ textAlign: 'center', fontSize: 28 }}>
          Item not found
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 17 }}>
          Try searching the item with a different keyword.
        </Text>
      </View>
    </View>
  );
};

export default SearchFailed;
