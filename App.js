import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItemsSectionList from './components/MenuItemsSectionList';
// import MenuItemsFlatList from './components/MenuItemsFlatList';
// import MenuItemsScrollView from './components/MenuItemsScrollView';
// import FeedbackForm from './components/FeedbackFormInputTextComponent';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';


// Instantiate the Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {

  function LogoTitle() {
    return (
      <Image 
        source={require('./img/LittleLemonLogo.jpg')} 
        style={styles.image} 
      />
    );
  }


  return (
  
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Login' // Setting up initial screen
      >

        <Stack.Screen 
          options={{ 
            title: "Home", 
            headerTitle: (props) => <LogoTitle {...props} />
          }}                          // Setting up title of the screen
          name="Welcome"              // Setting up name of the screen
          component={WelcomeScreen}   // Setting up component to be rendered
        />
        <Stack.Screen 
          options={{
            title: "Login",
          }}                          // Setting up title of the screen
          name="Login"                // Setting up name of the screen
          component={LoginScreen}     // Setting up component to be rendered
        /> 
        <Stack.Screen
          name="Menu"
          component={MenuItemsSectionList}
        />

      </Stack.Navigator>
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