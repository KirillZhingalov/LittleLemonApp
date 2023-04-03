import {useColorScheme} from 'react-native';
import { ScrollView, View, Text, StyleSheet, Image, Pressable } from 'react-native';

export default function WelcomeScreen({ navigation }) {

  const colorScheme = useColorScheme();


  return (
    <ScrollView style={[
      styles.container, 
      colorScheme === 'light' ? { backgroundColor: '#ffffff' } : { backgroundColor: "#333333"} 
    ]}>

      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../img/LittleLemonLogo.jpg')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'Little Lemon Logo'}
        />

        <Text style={[
          styles.headerText, 
          colorScheme === 'light' ? {color: 'black'} : {color: '#EDEFEE'}
        ]}>Little Lemon</Text>
      </View>
      <Text style={[
        styles.regularText, 
        colorScheme === 'light' ? {color: 'black'} : {color: '#EDEFEE'}
      ]}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text>

      {/* Button to move into Menu */}
      <Pressable
        onPress={() => navigation.navigate('Menu')}
        style={styles.button}>
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>

      {/* Logout button */}
      <Pressable style={styles.button} onPress={() => navigation.goBack()}> 
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>

      {/* Settings button */}
      <Pressable style={styles.button} onPress={() => navigation.navigate('Settings')}>
        <Text style={styles.buttonText}>Settings</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#333333',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    // color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 50,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 25,
  },
});