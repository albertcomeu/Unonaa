import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const [email, setEmail] = useState('mail@example.ru');
  const [password, setPassword] = useState('1234');
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const navigateToNextScreen = () => {
    navigation.navigate('LoginConform', { email, password });
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
        placeholder="Password"
        placeholderTextColor="peachpuff"
        secureTextEntry={true}
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

export default LoginScreen;
