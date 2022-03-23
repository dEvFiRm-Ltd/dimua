import React, { useState } from 'react';
import { View } from 'react-native';
import style, { color } from '../assets/css/style';
import TextInput from 'react-native-material-textinput';
const { forms } = style;
const Login = () => {
  const [name, setName] = useState('');

  const handleInputChange = (value) => setName(value);

  return (
    <View style={forms.container}>
      <View style={forms.input}>
        <TextInput
          label='Email Address'
          value={name}
          onChangeText={handleInputChange}
          autoFocus={true}
          // keyboardType='email-address'
          // secureTextEntry={true}
        />
      </View>
      <View style={forms.input}>
        <TextInput
          label='Password'
          value={name}
          onChangeText={handleInputChange}
          // keyboardType='email-address'
          secureTextEntry={true}
        />
      </View>
    </View>
  );
};

export default Login;
