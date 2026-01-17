// LoginScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
    const navigation=useNavigation()

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // Navigate to Home screen upon successful sign-in
      navigation.navigate('Home', { user: userInfo.user });
    } catch (error) {
      Alert.alert('Sign-In Error', error.message);
    }
  };

  useEffect(() => {
      GoogleSignin.configure({
        webClientId: '829769076401-2c0oi8f2ricga8h8f5ts1i33bo5qafle.apps.googleusercontent.com', // Replace with your actual web client ID
      });
    }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Google Sign-In Example</Text>
      <TouchableOpacity style={styles.button} onPress={handleGoogleSignIn}>
        <Text style={styles.buttonText}>Sign In with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  title: {
    fontSize: 24,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#4285F4',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
