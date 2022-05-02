import { View, ScrollView } from 'react-native';
import React from 'react';
import SingleProductSearch from './SingleProductSearch';

const SearchSuccess = ({ item }) => {
  return (
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
      {item.map((product, index) => {
        return (
          <View
            key={index}
            style={{
              width: 160,
              height: 280,
              paddingTop: 70,
              paddingHorizontal: 10,
              marginTop: index % 2 === 0 ? 0 : 65,
            }}
          >
            <SingleProductSearch data={product} rank={index} />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default SearchSuccess;
