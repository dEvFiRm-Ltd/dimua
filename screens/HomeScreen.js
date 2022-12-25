import {
  View,
  Text,
  Pressable,
  TextInput,
  Keyboard,
  FlatList,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import style, {color} from '../assets/css/style';
import Cart from '../assets/img/cart.svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {products} from '../mocks/data';
import SingleProducts from '../components/SingleProducts';

const {home} = style;
const data = [
  {title: 'foods'},
  {title: 'drinks'},
  {title: 'snacks'},
  {title: 'sauces'},
  {title: 'desserts'},
];

const Home = ({navigation}) => {
  const [active, setActive] = useState('foods');
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View
        style={{
          paddingHorizontal: 40,
          paddingTop: 25,
          paddingBottom: 5,
          flex: 1,
        }}>
        <View style={home.header}>
          <Pressable
            style={{flexDirection: 'column'}}
            onPress={() => {
              navigation.toggleDrawer();
              Keyboard.dismiss();
            }}>
            <View style={home.drawerTop} />
            <View style={home.drawerMiddle} />
            <View style={home.drawerBottom} />
          </Pressable>
          <Pressable style={home.cartBtn}>
            <Cart />
          </Pressable>
        </View>
        <View style={{width: 186, marginTop: 16}}>
          <Text style={home.titleText}>Delicious food for you</Text>
        </View>
        <View style={{position: 'relative'}}>
          <FontAwesome5
            style={home.searchIcon}
            name="search"
            size={18}
            color={color.ash}
          />
          <TextInput
            style={home.searchBox}
            placeholder="Search for food"
            keyboardType="default"
            onSubmitEditing={({text, eventCount, target}) => {
              navigation.navigate('Search');
            }}
          />
        </View>
        <FlatList
          style={{flexGrow: 0}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item, index}) => (
            <Pressable key={index} onPress={() => setActive(item.title)}>
              <View
                style={{
                  marginHorizontal: 10,
                  position: 'relative',
                }}>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    padding: 10,
                    color: item.title === active ? color.red : color.ash,
                  }}>
                  {item.title}
                </Text>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    width: item.title === active ? '100%' : 0,
                    height: 3,
                    borderRadius: 10,
                    backgroundColor: color.red,
                  }}
                />
              </View>
            </Pressable>
          )}
        />
        <View style={{marginLeft: 'auto', marginTop: 25}}>
          <Pressable>
            <Text style={{color: color.red}}>See More</Text>
          </Pressable>
        </View>
        <FlatList
          style={{flexGrow: 0}}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={products}
          renderItem={({item, index, separators}) => (
            <View
              style={{
                height: 270,
                width: 175,
                padding: 0,
                marginTop: 72,
                marginHorizontal: 16,
              }}>
              <Pressable
                key={index}
                style={{flex: 1}}
                onPress={() => navigation.navigate('Details')}>
                <SingleProducts data={item} />
              </Pressable>
            </View>
          )}
        />
        <View
          style={{
            marginTop: 'auto',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Pressable
            style={{
              // shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.4,
              elevation: 20,
            }}>
            <FontAwesome5
              name="home"
              size={24}
              style={{
                shadowColor: color.red,
                padding: 7,
              }}
              color={color.red}
            />
          </Pressable>
          <Pressable
            style={{
              // shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.4,
              elevation: 20,
            }}
            onPress={() => navigation.navigate('NoHistory')}>
            <FontAwesome5
              name="heart"
              size={24}
              style={{
                shadowColor: color.ash,
                padding: 7,
              }}
              color={color.ash}
            />
          </Pressable>
          <Pressable
            style={{
              // shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.4,
              elevation: 20,
            }}
            onPress={() => navigation.navigate('Profile')}>
            <FontAwesome5
              name="user"
              size={24}
              style={{
                shadowColor: color.ash,
                padding: 7,
              }}
              color={color.ash}
            />
          </Pressable>
          <Pressable
            style={{
              // shadowOffset: { width: 0, height: 1 },
              shadowRadius: 2,
              shadowOpacity: 0.4,
              elevation: 20,
            }}
            onPress={() => navigation.navigate('NoHistory')}>
            <FontAwesome5
              name="history"
              size={24}
              style={{
                shadowColor: color.ash,
                padding: 7,
              }}
              color={color.ash}
            />
          </Pressable>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Home;
