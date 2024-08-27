import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './style.js';

export default function App() {
  const [numero, setNumero] = useState(null);

  const sortearNumero = () => {
    const numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    setNumero(numeroAleatorio);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sortear um número</Text>
      <View style={styles.btn}>
        <Button title="SORTEAR" onPress={sortearNumero} color="#fff" />
      </View>
      <Text style={styles.resultado}>
        {numero ? `Número sorteado: ${numero}` : 'Nenhum número sorteado'}
      </Text>
    </View>
  );
}
