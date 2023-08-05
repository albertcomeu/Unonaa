import React, { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import SwitchSelector from "react-native-switch-selector";
import { useNavigation } from "@react-navigation/native";

const gender_options = [
  { label: "Мужчина", value: "Мужчина" },
  { label: "Женщина", value: "Женщина" },
  { label: "Другой", value: "Другой" },
];

const orietantion_options = [
  { label: "Гетеро", value: "Гетеро" },
  { label: "Гомосексуальная", value: "Гомосексуальная" },
  { label: "Другая", value: "Другая" },
];

const RegistrationScreen = () => {
  const [selectedGender, setSelectedGender] = useState<string>(gender_options[0].value);
  const [selectedOrientation, setSelectedOrientation] = useState<string>(orietantion_options[0].value);

  const handleGenderChange = (value: string) => {
    setSelectedGender(value);
  };

  const handleOrientationChange = (value: string) => {
    setSelectedOrientation(value);
  };

  const navigation = useNavigation();

  const navigateToNextScreen = () => {
    // Здесь можно сохранить значения в массив или объект, или передать их на следующий экран
    const userData = {
      gender: selectedGender,
      orientation: selectedOrientation,
    };
    console.log("User Data:", userData);

    navigation.navigate("Register1", {userData});
  };

  const genderStyles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "peachpuff",
    },
    switchText: {
      color: "peachpuff",
      fontSize: 10,
      fontWeight: "bold",
    },
    switchSelectedText: {
      fontSize: 10,
      fontWeight: "bold",
    },
  });

  const orientationStyles = StyleSheet.create({
    container: {
      marginTop: 50,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: "bold",
      textAlign: "center",
      color: "peachpuff",
    },
    switchText: {
      color: "peachpuff",
      fontSize: 10,
      fontWeight: "bold",
    },
    switchSelectedText: {
      fontSize: 10,
      fontWeight: "bold",
    },
  });

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={genderStyles.container}>
          <Text style={genderStyles.sectionTitle}>Укажите свой пол</Text>
        </View>
      </SafeAreaView>
      <SwitchSelector
        options={gender_options}
        initial={0}
        onPress={handleGenderChange}
        buttonColor="peachpuff"
        textStyle={genderStyles.switchText}
        selectedTextStyle={genderStyles.switchSelectedText}
      />
      <SafeAreaView>
        <View style={orientationStyles.container}>
          <Text style={orientationStyles.sectionTitle}>Укажите вашу ориентацию</Text>
        </View>
      </SafeAreaView>
      <SwitchSelector
        options={orietantion_options}
        initial={0}
        onPress={handleOrientationChange}
        buttonColor="peachpuff"
        textStyle={orientationStyles.switchText}
        selectedTextStyle={orientationStyles.switchSelectedText}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={navigateToNextScreen} style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 30,
    right: 30,
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

export default RegistrationScreen;
