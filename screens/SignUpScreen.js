import React from 'react';
import { View, Text, TextInput, Button, CheckBox } from 'react-native';
import { styles } from '../style';

export default function SignUpScreen() {
  return (
    <View style={styles.signUpContainer}>
      <Text style={styles.signUpTitle}>Cadastrar</Text>
      <TextInput style={styles.input} placeholder="Primeiro Nome" placeholderTextColor="#A5A5A5" />
      <TextInput style={styles.input} placeholder="Segundo Nome" placeholderTextColor="#A5A5A5" />
      <TextInput style={styles.input} placeholder="E-mail ou Número de Telefone" placeholderTextColor="#A5A5A5" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#A5A5A5" secureTextEntry />
      <View style={styles.checkboxContainer}>
        <CheckBox />
        <Text style={styles.checkboxText}>Aceito receber atualizações e outras informações promocionais.</Text>
      </View>
      <Button title="Cadastrar-se" color="#41784C" onPress={() => alert('Cadastrado!')} />
    </View>
  );
}
