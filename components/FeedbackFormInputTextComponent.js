import * as React from 'react';
import { ScrollView, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform } from 'react-native';

export default function FeedbackForm() {
    const [firstName, onChangeFirstName] = React.useState('');  
    
    return (

    <KeyboardAvoidingView 
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
    >
        <ScrollView indicatorStyle="white" style={styles.container} keyboardDismissMode="on-drag">
             
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <Text style={styles.regularText}>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. We would love
            to hear more about your experience with us!
            </Text>
            
            
                <TextInput 
                    style={styles.inputBox} 
                    placeholder="First Name"
                    onChangeText={onChangeFirstName}
                />

        
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
  });