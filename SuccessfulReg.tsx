import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SuccessfulReg = ({ route }) => {
  const { FinalUserData } = route.params;
  console.log(FinalUserData);

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
