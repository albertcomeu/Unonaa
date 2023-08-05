import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const RegisterMailConform = ({ route, navigation }) => {
  const { email, password } = route.params;

  const navigateToNextScreen = () => {
    // Replace 'NextScreen' with the name of the screen you want to navigate to
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email: {email}</Text>
      <Text style={styles.label}>Password: {password}</Text>
      <TouchableOpacity style={styles.button} onPress={navigateToNextScreen}>
        <Text style={styles.buttonText}>Далее</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: 'peachpuff',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: 'peachpuff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterMailConform;
