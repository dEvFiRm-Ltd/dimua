import * as React from 'react';
import { Button, View } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.toggleDrawer()} title='Drawer' />
    </View>
  );
}
