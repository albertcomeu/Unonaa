import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LoginConform = ({ route }) => {
  const { email, password } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email: {email}</Text>
      <Text style={styles.label}>Password: {password}</Text>
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
});

export default LoginConform;
