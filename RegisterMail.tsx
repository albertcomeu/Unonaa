import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterMailScreen = () => {
  const [email, setEmail] = useState('mail@example.ru');
  const [password, setPassword] = useState('Введите пароль');
  const [confirmPassword, setConfirmPassword] = useState('Подтвердите пароль');
  const [username, setUsername] = useState('Введите username');
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleConfirmPasswordChange = (text) => {
    setConfirmPassword(text);
  };

  const handleUsernameChange = (text) => {
    setUsername(text);
  };

  const navigateToNextScreen = () => {
    console.log(email)

    const userMailinf = {
      email: email,
      password: password,
      username: username
    };

    navigation.navigate('Register', { userMailinf });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Email"
        placeholderTextColor="peachpuff"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Пароль"
        placeholderTextColor="peachpuff"

      />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={handleConfirmPasswordChange}
        placeholder="Подтвердите пароль"
        placeholderTextColor="peachpuff"
      />
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={handleUsernameChange}
        placeholder="Username"
        placeholderTextColor="peachpuff"
      />
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
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'peachpuff',
    borderRadius: 5,
    color: 'peachpuff',
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'peachpuff',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterMailScreen;
