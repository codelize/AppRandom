import { StyleSheet, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    backgroundColor: "#103F19",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
  },
  gradient: {
    position: 'absolute',
    top: '40%', 
    left: 0,
    right: 0,
    height: 100, 
    borderRadius: 50,
    width: width * 0.8,
  },
  tagline: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    marginBottom: height * 0.2,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 30,
    width: "80%",
  },
  button: {
    backgroundColor: "#41784C", // Cor de fundo do botão
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 20,
    borderWidth: 2,               // Largura da borda
    borderColor: "#5C9B5C",       // Verde mais claro que o fundo
  },
  buttonText: {
    color: "#FFFFFF",             // Cor do texto
    fontWeight: 'bold',           // Texto em negrito
    textAlign: 'center',          // Centraliza o texto
  },
});
