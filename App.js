import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItemsSectionList from './components/MenuItemsSectionList';
// import MenuItemsFlatList from './components/MenuItemsFlatList';
// import MenuItemsScrollView from './components/MenuItemsScrollView';
// import FeedbackForm from './components/FeedbackFormInputTextComponent';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';


const Drawer = createDrawerNavigator();

export default function App() {

  return (
  
    <NavigationContainer>
      <Drawer.Navigator
        // useLegacyImplementation
        // screenOptions={{ drawerPosition: "right" }}
        initialRouteName='Welcome' // Setting up initial screen
      >

        <Drawer.Screen 
          name="Welcome"              // Setting up name of the screen
          component={WelcomeScreen}   // Setting up component to be rendered
        />
        <Drawer.Screen
          name="Menu"
          component={MenuItemsSectionList}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { 
    backgroundColor: '#333333' 
  },
  image: {
    width: 3000, 
    height: 40, 
    resizeMode: 'contain',
    alignSelf: 'center',
  }
});