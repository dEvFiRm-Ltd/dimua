import { Dimensions, Pressable, Text, TextInput, View } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { color } from '../css/style';

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const NoInternet = ({ navigation }) => {
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
          justifyContent: 'center',
          alignItems: 'center',
          height: screenHeight - 280,
          paddingHorizontal: 70,
          flexDirection: 'column',
        }}
      >
        <FontAwesome5 name='wifi' regular size={75} />
        <Text style={{ textAlign: 'center', fontSize: 28 }}>No internet</Text>
        <Text style={{ textAlign: 'center', fontSize: 17 }}>
          Your internet connection is currently not available please check or
          try again.
        </Text>
        <Pressable
          style={{
            width: 314,
            paddingVertical: 20,
            backgroundColor: color.red,
            borderRadius: 30,
            marginTop: 55,
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
            Try Again
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NoInternet;
