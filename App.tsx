// App.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import RegisterMailScreen from './RegisterMail';
import RegisterMailConform from './RegisterMailConf';
import RegisterScreen from './RegisterScreen';
import RegisterTallWeight from './RegisterTallWeight'
import RegisterPartnerQual from './RegisterPartnerQual';
import SuccessfulReg from './SuccessfulReg';
import LoginScreen from './Login';
import LoginConform from './LoginConform';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="RegisterMail" component={RegisterMailScreen} />
        <Stack.Screen name="RegisterMailConform" component={RegisterMailConform} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Register1" component={RegisterTallWeight} />
        <Stack.Screen name="Register2" component={RegisterPartnerQual} />
        <Stack.Screen name="RegisterFinal" component={SuccessfulReg} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="LoginConform" component={LoginConform} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
