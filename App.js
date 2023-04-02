import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItemsSectionList from './components/MenuItemsSectionList';
// import MenuItemsFlatList from './components/MenuItemsFlatList';
// import MenuItemsScrollView from './components/MenuItemsScrollView';
// import FeedbackForm from './components/FeedbackFormInputTextComponent';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';


// Instantiate the Stack Navigator
// const Stack = createNativeStackNavigator();

// Instantiate Tab Navigator 
const Tab = createBottomTabNavigator();

export default function App() {

  return (
  
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Welcome' // Setting up initial screen
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Welcome') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Menu') {
              iconName =  'ios-list';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        
        <Tab.Screen 
          name="Welcome"              // Setting up name of the screen
          component={WelcomeScreen}   // Setting up component to be rendered
        />
        <Tab.Screen
          name="Menu"
          component={MenuItemsSectionList}
        />

      </Tab.Navigator>
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