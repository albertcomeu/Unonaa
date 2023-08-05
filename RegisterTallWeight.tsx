import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import Slider from '@react-native-community/slider';

const RegisterTallWeight = ( {route} ) => {
  const [height, setHeight] = useState<number>(160);
  
  const [age, setAge] = useState<number>(25);
  const navigation = useNavigation();

  const { userData } = route.params;
  console.log(userData)

  const handleHeightChange = (value: number) => {
    setHeight(value);
  };

  const handleAgeChange = (value: number) => {
    setAge(value);
  };

  const navigateToNextScreen = () => {
    
    let r1userData = {

      height: height,
      age: age,
    };

    let r1Data = Object.assign({}, userData, r1userData);

    navigation.navigate("Register2", {r1Data});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={100}
          maximumValue={220}
          minimumTrackTintColor="#fadadd"
          maximumTrackTintColor="#000000"
          thumbTintColor="peachpuff"
          step={1}
          value={height}
          onValueChange={handleHeightChange}
        />
        <Text style={styles.valueText}>Height: {height} cm</Text>
      </View>

      <View style={styles.sliderContainer}>
        <Slider
          style={styles.slider}
          minimumValue={18}
          maximumValue={100}
          minimumTrackTintColor="#fadadd"
          maximumTrackTintColor="#000000"
          thumbTintColor="peachpuff"
          step={1}
          value={age}
          onValueChange={handleAgeChange}
        />
        <Text style={styles.valueText}>Age: {age} years</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToNextScreen} style={styles.button}>
          <Text style={styles.buttonText}>Далее</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    justifyContent: 'center',
  },
  sliderContainer: {
    marginVertical: 40,
  },
  slider: {
    width: '80%',
    alignSelf: 'center',
  },
  valueText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'peachpuff',
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "peachpuff",
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RegisterTallWeight;
