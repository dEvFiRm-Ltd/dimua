import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { color } from '../assets/css/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const { width: screenWidth } = Dimensions.get('window');

const Profile = ({ navigation }) => {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: color.base,
        padding: 40,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 37,
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
          Profile
        </Text>
      </View>
      <Text
        style={{
          marginTop: 42,
          textTransform: 'capitalize',
          color: color.black,
          fontSize: 34,
        }}
      >
        My Profile
      </Text>
      <View
        style={{
          marginTop: 42,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 11,
          }}
        >
          <Text>Personal details</Text>
          <Pressable>
            <Text style={{ color: color.red }}>change</Text>
          </Pressable>
        </View>
        <View
          style={{
            borderRadius: 20,
            paddingHorizontal: 16,
            paddingTop: 18,
            paddingBottom: 26,
            marginBottom: 27,
            backgroundColor: color.white,
            overflow: 'hidden',
            justifyContent: 'flex-start',
            flexDirection: 'row',
            shadowColor: 'rgba(57,57,57,0.03)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <View
            style={{
              width: 91,
              height: 100,
              borderRadius: 10,
              overflow: 'hidden',
            }}
          >
            <Image
              source={require('../assets/img/user.png')}
              style={{
                width: null,
                height: null,
                resizeMode: 'contain',
                flex: 1,
              }}
            />
          </View>
          <View style={{ flexDirection: 'column', marginLeft: 16 }}>
            <Text style={{ fontSize: 18, marginBottom: 4 }}>Alem Bura</Text>
            <Text style={{ fontSize: 16, marginBottom: 4 }}>
              AlemBura@buras.com
            </Text>
            <View
              style={{ width: 165, height: 1, backgroundColor: color.ash }}
            />
            <Text style={{ fontSize: 16, marginBottom: 4 }}>+333333333333</Text>
            <View
              style={{ width: 165, height: 1, backgroundColor: color.ash }}
            />
            <Text style={{ fontSize: 16, marginBottom: 4, width: 190 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, nam!{' '}
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            marginBottom: 27,
            borderRadius: 20,
            paddingVertical: 20,
            paddingHorizontal: 23,
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: color.white,
            alignItems: 'center',
            shadowColor: 'rgba(57,57,57,0.03)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <Text>Orders</Text>
          <FontAwesome5 name='chevron-right' solid />
        </Pressable>
        <Pressable
          style={{
            marginBottom: 27,
            borderRadius: 20,
            paddingVertical: 20,
            paddingHorizontal: 23,
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: color.white,
            alignItems: 'center',
            shadowColor: 'rgba(57,57,57,0.03)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <Text>Pending Reviews</Text>
          <FontAwesome5 name='chevron-right' solid />
        </Pressable>
        <Pressable
          style={{
            marginBottom: 27,
            borderRadius: 20,
            paddingVertical: 20,
            paddingHorizontal: 23,
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: color.white,
            alignItems: 'center',
            shadowColor: 'rgba(57,57,57,0.03)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <Text>FAQ</Text>
          <FontAwesome5 name='chevron-right' solid />
        </Pressable>
        <Pressable
          style={{
            marginBottom: 27,
            borderRadius: 20,
            paddingVertical: 20,
            paddingHorizontal: 23,
            justifyContent: 'space-between',
            flexDirection: 'row',
            backgroundColor: color.white,
            alignItems: 'center',
            shadowColor: 'rgba(57,57,57,0.03)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <Text>Payment Methods</Text>
          <FontAwesome5 name='chevron-right' solid />
        </Pressable>
        <Pressable
          style={{
            marginBottom: 67,
            width: 314,
            paddingVertical: 20,
            backgroundColor: color.red,
            borderRadius: 30,
            marginLeft: 'auto',
            alignItems: 'center',
            shadowColor: 'rgba(57,57,57,0.03)',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 5,
            shadowRadius: 5,
            elevation: 10,
          }}
        >
          <Text
            style={{
              color: color.white,
              textTransform: 'capitalize',
              textAlign: 'center',
            }}
          >
            Update
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Profile;
