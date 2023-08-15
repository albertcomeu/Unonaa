import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const SuccessfulReg = ({ route }) => {
  const { FinalUserData } = route.params;
  const navigation = useNavigation();
  const [currentUser, setCurrentUser] = useState(null);

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
          p_age: FinalUserData['p_age'],
        }),
      });
      console.log('Response:', response.data);

      // Выполняем GET запрос для получения всех пользователей
      try {
        const getUserResponse = await axios.get('http://192.168.0.178:8000/api/users/');
        const users = getUserResponse.data;

        // Ищем пользователя в массиве по email
        const foundUser = users.find(user => user.email === FinalUserData['email']);

        if (foundUser) {
          setCurrentUser(foundUser);
        } else {
          console.log('Пользователь не найден');
        }
      } catch (getUserError) {
        console.error('Error getting users:', getUserError);
      }
    } catch (error) {
      console.error('Error sending user data:', error);
    }
  };

  useEffect(() => {
    sendUserData();
  }, []);

  const goToHomeScreen = () => {
    if (currentUser) {
      navigation.navigate('HomeScreen', { currentUser });
    } else {
      console.log('Пользователь не найден');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Поздравляем!</Text>
      <Text style={styles.text}>Вы успешно зарегистрировались.</Text>
      <Text style={styles.text}>Ваши данные:</Text>
      <View style={styles.userDataContainer}>
        <Text style={styles.userDataText}>Username: {FinalUserData['username']}</Text>
        <Text style={styles.userDataText}>Email: {FinalUserData['email']}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={goToHomeScreen}
        >
          <Text style={styles.buttonText}>Далее</Text>
        </TouchableOpacity>
      </View>
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
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  button: {
    backgroundColor: 'peachpuff', // Изменен цвет кнопки на персиковый
    borderColor: 'peachpuff',
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'black', // Изменен цвет текста на черный
    textAlign: 'center',
  },
});

export default SuccessfulReg;
