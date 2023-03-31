import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import MenuItemsSectionList from './components/MenuItemsSectionList';
// import MenuItemsFlatList from './components/MenuItemsFlatList';
// import MenuItemsScrollView from './components/MenuItemsScrollView';
// import FeedbackForm from './components/FeedbackFormInputTextComponent';
import LoginScreen from './components/LoginScreen';
import WelcomeScreen from './components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <LittleLemonHeader />
        {/* <FeedbackForm /> */}
        {/* <LoginScreen/> */}
        <WelcomeScreen/>
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});