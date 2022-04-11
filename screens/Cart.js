import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { color } from '../assets/css/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');

const Cart = ({ navigation }) => {
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
          flexDirection: 'row',
          marginBottom: 37,
          paddingHorizontal: 40,
        }}
      >
        <Pressable
          style={{
            padding: 6,
            marginRight: 30,
            width: 24,
          }}
          onPress={() => navigation.goBack()}
        >
          <FontAwesome5 name='chevron-left' regular size={18} />
        </Pressable>
        <Text
          style={{
            width: screenWidth - 180,
            paddingVertical: 6,
            fontSize: 16,
            textAlign: 'center',
            textTransform: 'capitalize',
          }}
        >
          order
        </Text>
      </View>
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
          height: screenHeight - 130,
          paddingHorizontal: 70,
          flexDirection: 'column',
        }}
      >
        <FlatList
          style={{ flexGrow: 0 }}
          /*  data={data}
          renderItem={({ item, index }) => (
            <Pressable key={index} onPress={() => setActive(item.title)}>
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
                    color: item.title === active ? color.red : color.ash,
                  }}
                >
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
          )} */
        />
        <View
          style={{
            borderRadius: 30,
            padding: 16,
            backgroundColor: color.white,
            overflow: 'hidden',
            shadowColor: 'rgba(0, 0, 0, 0.3)',
            shadowOffset: { width: 2, height: 2 },
            elevation: 10,
            shadowRadius: 4,
            width: screenWidth - 80,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              width: 69,
              height: 69,
              backgroundColor: color.ash,
              borderRadius: (1 / 2) * 69,
              overflow: 'hidden',
              shadowColor: 'rgba(0, 0, 0, 0.7)',
              shadowOffset: { width: 2, height: 2 },
              elevation: 10,
              shadowRadius: 2,
              marginRight: 16,
            }}
          >
            <Image
              source={require('../assets/img/item01.jpg')}
              style={{
                width: null,
                height: null,
                flex: 1,
                resizeMode: 'contain',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginTop: 11,
              justifyContent: 'flex-start',
              alignItems: 'flex-start',
              width: '100%',
            }}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode='tail'
              style={{ width: 188, marginBottom: 11 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
              ipsum.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                // alignItems: 'flex-start',
                width: 188,
              }}
            >
              <Text style={{ color: color.red }}>$10.00</Text>
              <Pressable
                style={{
                  marginTop: 6,
                  borderRadius: 30,
                  backgroundColor: color.red,
                  marginLeft: 'auto',
                }}
              >
                <Text>btn</Text>
              </Pressable>
            </View>
          </View>
        </View>
        <Pressable
          style={{
            width: 314,
            paddingVertical: 20,
            backgroundColor: color.red,
            borderRadius: 30,
            marginTop: 'auto',
            alignItems: 'center',
            shadowColor: 'rgba(57,57,57,0.03)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            shadowRadius: 5,
            elevation: 10,
          }}
          onPress={() => navigation.navigate('Home')}
        >
          <Text
            style={{
              color: color.white,
              textTransform: 'capitalize',
              textAlign: 'center',
            }}
          >
            Complete Order
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;
