import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

// Define the type for the navigation prop
type WelcomeScreenProps = {
  navigation: StackNavigationProp<any>; // You can replace 'any' with your navigation stack type
};

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ navigation }) => {
  const handleRegister = () => {
    navigation.navigate('RegisterMail');
  };

  const handleLogin = () => {
    navigation.navigate('Login')
  };

  return (
    <View style={styles.container}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Добро пожаловать на Unona</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
          <Text style={styles.buttonText}>Зарегистрироваться</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Войти</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcomeTextContainer: {
    marginBottom: 30,
  },
  welcomeText: {
    color: 'peachpuff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'peachpuff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
