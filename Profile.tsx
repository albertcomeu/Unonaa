import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = ({ route }) => {
    const { currentUser } = route.params;

  // Преобразование строки с информацией о пользователе в объект
  const aboutInfo = JSON.parse(currentUser.about);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Профиль пользователя</Text>
      <Text style={styles.jsonText}>
        {JSON.stringify(currentUser, null, 2)}
      </Text>
      <Text style={styles.title}>Основная информация</Text>
      <Text style={styles.infoText}>ID: {currentUser.id}</Text>
      <Text style={styles.infoText}>Имя пользователя: {currentUser.username}</Text>
      <Text style={styles.infoText}>Email: {currentUser.email}</Text>
      <Text style={styles.infoText}>Пол: {aboutInfo.gender}</Text>
      <Text style={styles.infoText}>Ориентация: {aboutInfo.orientation}</Text>
      <Text style={styles.infoText}>Рост: {aboutInfo.height}</Text>
      <Text style={styles.infoText}>Возраст: {aboutInfo.age}</Text>
      <Text style={styles.infoText}>Тип отношений: {aboutInfo.relationType}</Text>
      <Text style={styles.infoText}>Партнер: {aboutInfo.p_height}</Text>
      <Text style={styles.infoText}>Возраст партнера: {aboutInfo.p_age}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'peachpuff',
    marginBottom: 10,
  },
  jsonText: {
    color: 'peachpuff',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: 'peachpuff',
    marginBottom: 5,
  },
});

export default ProfileScreen;
