import { Dimensions, Text, View } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { height: screenHeight } = Dimensions.get('window');
const SearchFailed = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: screenHeight - 280,
        paddingHorizontal: 88,
      }}
    >
      <FontAwesome5 name='search' light size={75} />
      <Text style={{ textAlign: 'center', fontSize: 28 }}>Item not found</Text>
      <Text style={{ textAlign: 'center', fontSize: 17 }}>
        Try searching the item with a different keyword.
      </Text>
    </View>
  );
};

export default SearchFailed;
