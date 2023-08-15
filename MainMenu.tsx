import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = ({ route }) => {
  const navigation = useNavigation();
  const { currentUser } = route.params;

  useEffect(() => {
    // Логика, которую вы хотели использовать с useEffect
  }, []);

  const handleSearchPair = () => {
    // Обработчик для поиска пары
    // Здесь вы можете добавить код для поиска пары
  };
  console.log(currentUser)
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={handleSearchPair}
      >
        <Text style={styles.buttonText}>Поиск пары</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Profile', { currentUser })}
      >
        <Text style={styles.buttonText}>Профиль</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
  },
  button: {
    marginVertical: 10,
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    width: 150,
  },
  buttonText: {
    color: 'peachpuff',
    textAlign: 'center',
  },
});

export default HomeScreen;
