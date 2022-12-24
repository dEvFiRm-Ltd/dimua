import {Pressable, ScrollView, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {color} from '@/assets/css/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SearchSuccess from '@/components/SearchSuccess';
import {products} from '@/mocks/data';
import SearchFailed from '@/components/SearchFailed';

const SearchResult = ({navigation}) => {
  const [fev, setFev] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setFev(false);
    setSearch(products);
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: color.base,
        paddingTop: 40,
      }}>
      <View
        style={{
          paddingHorizontal: 40,
          justifyContent: 'flex-start',
          flexDirection: 'row',
          marginBottom: 37,
        }}>
        <Pressable
          style={{padding: 6, marginRight: 30}}
          onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" regular size={18} />
        </Pressable>
        <TextInput
          placeholder="searched"
          style={{
            paddingVertical: 6,
            marginTop: -6,
            fontSize: 16,
            textTransform: 'capitalize',
          }}
        />
      </View>
      {search.length > 0 ? <SearchSuccess item={search} /> : <SearchFailed />}
    </ScrollView>
  );
};

export default SearchResult;
