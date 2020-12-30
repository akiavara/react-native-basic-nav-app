import * as React from 'react';
import { Linking } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { AntDesign } from '@expo/vector-icons/';

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Contact us"
        icon={({ focused, color, size }) => <AntDesign name="form" size={size} color={focused ? '#7cc' : '#ccc'} />}
        onPress={() => Linking.openURL('https://github.com/akiavara/react-native-basic-nav-app')}
      />
    </DrawerContentScrollView>
  );
}
