import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import style, {color} from '../assets/css/style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Slider from '../components/Slider';
import {products} from '../mocks/data';
const {forms, productDetails} = style;

const ProductDetails = ({navigation}) => {
  const [fev, setFev] = useState(false);

  useEffect(() => {
    setFev(false);
  }, []);

  return (
    <ScrollView style={productDetails.contianer}>
      <View style={productDetails.header}>
        <Pressable style={{padding: 6}} onPress={() => navigation.goBack()}>
          <FontAwesome5 name="chevron-left" regular size={18} />
        </Pressable>
        <Pressable style={{padding: 12}} onPress={() => setFev(!fev)}>
          {fev === false ? (
            <FontAwesome5 name="heart" regular size={18} color={color.ash} />
          ) : (
            <FontAwesome5 name="heart" solid size={18} color={color.red} />
          )}
        </Pressable>
      </View>
      <Slider data={products} />
      <View style={{marginTop: 45, marginBottom: 10}}>
        <Text style={productDetails.title}>
          Lorem ipsum dolor, sit amet consectetur
        </Text>
      </View>
      <View style={{marginBottom: 13}}>
        <Text style={productDetails.price}>$150</Text>
      </View>
      <View>
        <View style={{marginVertical: 14.5}}>
          <Text style={productDetails.textHeader}>delivery info</Text>
          <Text style={productDetails.textDetails}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero
            ex harum modi ea non consectetur eos. Placeat eveniet esse doloribus
            sunt distinctio cumque iure sequi ullam vel dicta quam aspernatur
            saepe mollitia ipsum aliquid dolore optio laudantium, ipsam vitae!
            Veniam consequuntur repellat vitae suscipit alias debitis animi
            pariatur accusantium?
          </Text>
        </View>
        <View style={{marginVertical: 14.5}}>
          <Text style={productDetails.textHeader}>return policy</Text>
          <Text style={productDetails.textDetails}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vero
            ex harum modi ea non consectetur eos. Placeat eveniet esse doloribus
            sunt distinctio cumque iure sequi ullam vel dicta quam aspernatur
            saepe mollitia ipsum aliquid dolore optio laudantium, ipsam vitae!
            Veniam consequuntur repellat vitae suscipit alias debitis animi
            pariatur accusantium?
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[{marginBottom: 70}, forms.submit]}
        activeOpacity={0.8}>
        <Text style={forms.submit.btn}> Add to Cart </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default ProductDetails;
