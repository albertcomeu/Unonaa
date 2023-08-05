import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const RegisterPartnerQual = ({ route }) => {
  const [relationType, setRelationType] = useState('Долгосрочные отношения');
  const [height, setHeight] = useState('Низкий рост < 160');
  const [age, setAge] = useState('Юный (<25)');
  const navigation = useNavigation();

  const handleRelationTypeChange = (value) => {
    setRelationType(value);
  };

  const { r1Data } = route.params;

  const handleHeightChange = (value) => {
    setHeight(value);
  };

  const handleAgeChange = (value) => {
    setAge(value);
  };

  const relationTypeOptions = [
    { label: 'Долгосрочные отношения', value: 'Долгосрочные отношения' },
    { label: 'Быстрые встречи', value: 'Быстрые встречи' },
  ];

  const heightOptions = [
    { label: 'Низкий рост < 160', value: 'Низкий рост < 160' },
    { label: 'Средний рост 160 - 180', value: 'Средний рост 160 - 180' },
    { label: 'Высокий рост 180+', value: 'Высокий рост 180+' },
  ];

  const ageOptions = [
    { label: 'Юный (<25)', value: 'Юный (<25)' },
    { label: 'Молодой (25-40)', value: 'Молодой (25-40)' },
    { label: 'Зрелый (40+)', value: 'Зрелый (40+)' },
  ];

  const navigateToNextScreen = () => {

    const partnerQualData = {
      relationType,
      height,
      age,
    };

    let FinalUserData = Object.assign({}, r1Data, partnerQualData);

    navigation.navigate('RegisterFinal', { FinalUserData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Выберите тип отношений:</Text>
        <SwitchSelector
          options={relationTypeOptions}
          initial={0}
          onPress={handleRelationTypeChange}
          buttonColor="peachpuff"
          backgroundColor="black"
          textStyle={styles.switchText}
          selectedTextStyle={styles.switchSelectedText}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Выберите желаемый рост партнера:</Text>
        <SwitchSelector
          options={heightOptions}
          initial={0}
          onPress={handleHeightChange}
          buttonColor="peachpuff"
          backgroundColor="black"
          textStyle={styles.switchText}
          selectedTextStyle={styles.switchSelectedText}
        />
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Выберите желаемую возрастную группу партнера:</Text>
        <SwitchSelector
          options={ageOptions}
          initial={0}
          onPress={handleAgeChange}
          buttonColor="peachpuff"
          backgroundColor="black"
          textStyle={styles.switchText}
          selectedTextStyle={styles.switchSelectedText}
        />
      </View>
      <TouchableOpacity style={styles.finishButton} onPress={navigateToNextScreen}>
  <View>
    <Text style={styles.finishButtonText}>Завершить регистрацию</Text>
  </View>
</TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
  },
  sectionContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'peachpuff',
  },
  switchText: {
    color: 'peachpuff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  switchSelectedText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  finishButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'peachpuff',
  },
  finishButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default RegisterPartnerQual;
