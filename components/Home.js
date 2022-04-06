import {
  View,
  Text,
  Pressable,
  TextInput,
  Keyboard,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import React from 'react';
import style, { color } from '../assets/css/style';
import Cart from '../assets/img/cart.svg';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { products } from '../mocks/data';
import SingleProducts from './SingleProducts';

const { home } = style;

const Home = ({ navigation }) => {
  return (
    <>
      <View style={home.header}>
        <Pressable
          style={{ flexDirection: 'column' }}
          onPress={() => {
            navigation.toggleDrawer();
            Keyboard.dismiss();
          }}
        >
          <View style={home.drawerTop} />
          <View style={home.drawerMiddle} />
          <View style={home.drawerBottom} />
        </Pressable>
        <Pressable style={home.cartBtn}>
          <Cart />
        </Pressable>
      </View>
      <View style={{ width: 186, marginBottom: 28 }}>
        <Text style={home.titleText}>Delicious food for you</Text>
      </View>
      <View style={{ position: 'relative' }}>
        <Icon
          style={home.searchIcon}
          name='search'
          size={18}
          color={color.ash}
        />
        <TextInput
          style={home.searchBox}
          placeholder='Search for food'
          keyboardType='default'
        />
      </View>
      <FlatList
        style={{ flexGrow: 0 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[
          { title: 'foods' },
          { title: 'drinks' },
          { title: 'snacks' },
          { title: 'sauces' },
          { title: 'desserts' },
        ]}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight key={index}>
            <View
              style={{
                marginHorizontal: 10,
                position: 'relative',
              }}
            >
              <Text
                style={{
                  textTransform: 'capitalize',
                  padding: 10,
                  color: color.red,
                }}
              >
                {item.title}
              </Text>
              <View
                style={{
                  position: 'absolute',
                  bottom: 0,
                  width: '100%',
                  height: 3,
                  borderRadius: 10,
                  backgroundColor: color.red,
                }}
              />
            </View>
          </TouchableHighlight>
        )}
      />
      <View style={{ marginLeft: 'auto', marginTop: 45 }}>
        <Pressable
          onPress={() => {
            navigation.toggleDrawer();
            Keyboard.dismiss();
          }}
        >
          <Text style={{ color: color.red }}>See More</Text>
        </Pressable>
      </View>
      <FlatList
        style={{ flexGrow: 0 }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={index}
            style={{ height: 270, marginTop: 72 }}
          >
            <SingleProducts data={item} />
          </TouchableHighlight>
        )}
      />
    </>
  );
};

export default Home;
