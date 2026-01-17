// HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ route }) => {
  const { user } = route.params;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.welcome}>Welcome, {user}!</Text> */}
      <Text style={styles.email}>Email: {user.email}</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#e6f7ff',
  },
  welcome: {
    fontSize: 22,
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    color: '#333',
  },
});









