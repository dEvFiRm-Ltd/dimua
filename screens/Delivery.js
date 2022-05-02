import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RadioButton } from 'react-native-paper';
import { color } from '../css/style';

const { width: screenWidth } = Dimensions.get('window');

const Delivery = ({ navigation }) => {
  const [checked, setChecked] = React.useState('first');
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
          Checkout
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
        Delivery
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
          <Text>Address details</Text>
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
            <Text style={{ fontSize: 16, marginBottom: 4, width: 290 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto, nam!{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 11,
          }}
        >
          <Text>Delivery Method</Text>
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
            marginBottom: 67,
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
              flexDirection: 'column',
              marginLeft: 16,
              justifyContent: 'center',
            }}
          >
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15,
              }}
              onPress={() => setChecked('first')}
            >
              <RadioButton
                value='first'
                status={checked === 'first' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('first')}
                uncheckedColor='#9f9f9f'
                color={color.red}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text>Door Delivery</Text>
              </View>
            </Pressable>
            <View
              style={{
                width: 232,
                height: 1,
                backgroundColor: color.ash,
              }}
            />
            <Pressable
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: 15,
              }}
              onPress={() => setChecked('second')}
            >
              <RadioButton
                value='second'
                status={checked === 'second' ? 'checked' : 'unchecked'}
                onPress={() => setChecked('second')}
                uncheckedColor='#9f9f9f'
                color={color.red}
              />
              <View
                style={{
                  marginLeft: 15,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <Text>Pick Up</Text>
              </View>
            </Pressable>
          </View>
        </View>

        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginBottom: 48,
          }}
        >
          <Text>Total PRice</Text>
          <Text>$150</Text>
        </View>

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
            proceed to payment
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Delivery;
