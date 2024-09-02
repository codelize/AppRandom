import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { styles } from '../style';

export default function LoadingScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // 2 segundos de espera antes de mudar para a HomeScreen
  }, [navigation]);

  return (
    <View style={styles.loadingContainer}>
      <Text style={styles.logoText}>AGROCARE TECH</Text>
      <ActivityIndicator size="large" color="#fff" />
    </View>
  );
}
