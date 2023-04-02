import * as React from 'react';
import { useColorScheme } from 'react-native';
import { ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Pressable} from 'react-native';

export default function LoginScreen({ navigation }) {

  const [email, onEmailChange] = React.useState('');
  const [password, onPasswordChange] = React.useState('');

  const [isLoggedIn, onLoginPress] = React.useState(false);

  const colorScheme = useColorScheme();

  return (


      <KeyboardAvoidingView 
              behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
              style={styles.container}
      >
        <ScrollView style={styles.container}>
          <Text style={[
            styles.headerText, 
            colorScheme === 'light' ? {color: 'black'} : {color: '#EDEFEE'}
          ]}>Welcome to Little Lemon</Text>
          
          {!isLoggedIn && ( 
            <>
              <Text style={[
                styles.regularText, 
                colorScheme === 'light' ? { color: 'black' } : { color: '#EDEFEE' }
              ]}> Login to continue </Text>
              <TextInput 
                style={styles.inputBox} 
                placeholder="email" 
                onChangeText={onEmailChange} 
                keyboardType={'email-address'}
              />
              
              <TextInput 
                style={styles.inputBox} 
                placeholder="password" 
                onChangeText={onPasswordChange} 
                secureTextEntry={true} 
              />
            
              {/* <Pressable style={styles.button} onPress={() => onLoginPress(!isLoggedIn)}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable> */}
              <Pressable style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </>
          )}

        </ScrollView>
      </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  inputBox: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    borderColor: '#EDEFEE',
    backgroundColor: '#EDEFEE',
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
