import * as React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons/';

import CustomDrawerContent from './components/navigation/CustomDrawerContent';
import HomeScreen from './components/screens/HomeScreen';
import AboutScreen from './components/screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  const dimensions = useWindowDimensions();
  const isLargeScreen = dimensions.width >= 768;

  return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Home"
          screenOptions={({ navigation, scene }) => ({
            headerShown: !isLargeScreen
          })}
          drawerType={isLargeScreen ? 'permanent' : 'front'}
          drawerStyle={isLargeScreen ? null : { width: '80%' }}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
          >
          <Drawer.Screen name="Home"
            component={HomeScreen}
            options={{
              drawerIcon: ({focused, size}) => (
                <FontAwesome name="home" size={size} color={focused ? '#7cc' : '#ccc'} />
              ),
            }}
            />
          <Drawer.Screen name="About"
            component={AboutScreen}
            options={{
              drawerIcon: ({focused, size}) => (
                <FontAwesome name="hashtag" size={size} color={focused ? '#7cc' : '#ccc'} />
              ),
            }}
            />
        </Drawer.Navigator>
      </NavigationContainer>
  )
}
