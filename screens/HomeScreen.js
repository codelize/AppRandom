import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { styles } from '../style';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeContainer}>
      <Image source={require('../assets/LogoAgroCare.png')} style={styles.logo} />
      <Text style={styles.tagline}>Faça parte da nova geração agropecuarista do Brasil!</Text>
      <View style={styles.buttonContainer}>
        <Button title="Entrar" color="#41784C" onPress={() => alert('Entrar')} />
        <Button title="Cadastrar-se" color="#41784C" onPress={() => navigation.navigate('SignUp')} />
      </View>
    </View>
  );
}
