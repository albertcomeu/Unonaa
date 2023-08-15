import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SuccessfulReg = ({ route }) => {
  const { FinalUserData } = route.params;
  console.log(FinalUserData['email']);
  console.log(FinalUserData['password']);
  console.log(FinalUserData['username']);
  console.log(FinalUserData['gender']);
  console.log(FinalUserData['orientation']);
  console.log(FinalUserData['height']);
  console.log(FinalUserData['age']);
  console.log(FinalUserData['relationType']);
  console.log(FinalUserData['p_height']);
  console.log(FinalUserData['p_age']);

  const navigation = useNavigation();

  const sendUserData = async () => {
    try {
      const response = await axios.post('http://192.168.0.178:8000/api/users/', {
        username: FinalUserData['username'],
        password: FinalUserData['password'],
        email: FinalUserData['email'],
        about: JSON.stringify({
          gender: FinalUserData['gender'],
          orientation: FinalUserData['orientation'],
          height: FinalUserData['height'],
          age: FinalUserData['age'],
          relationType: FinalUserData['relationType'],
          p_height: FinalUserData['p_height'],
          p_age: FinalUserData['p_age'],})
      });
      console.log('Response:', response.data); // Логируем ответ от сервера
    } catch (error) {
      console.error('Error sending user data:', error);
    }
  };

  useEffect(() => {
    sendUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Congratulations!</Text>
      <Text style={styles.text}>You have successfully completed the registration.</Text>
      <Text style={styles.text}>Here is your data:</Text>

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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'peachpuff',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'peachpuff',
    marginBottom: 5,
  },
  userDataContainer: {
    marginTop: 20,
  },
  userDataText: {
    fontSize: 18,
    color: 'peachpuff',
  },
});

export default SuccessfulReg;
