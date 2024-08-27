import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#103F19",
    flex: 1,
    alignItems: "center", // Alinhamento horizontal ao centro
    justifyContent: "center", // Alinhamento vertical ao centro
  },
  titulo: {
    color: "white",
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    marginBottom: 20, // Espaçamento abaixo do título
  },
  resultado: {
    color: "white",
    fontSize: 30,
    marginTop: 20,
  },
  btn: {
    backgroundColor: "#41784C",
    width: 150,
    borderRadius: 50,
    padding: 8,
    alignItems: "center",
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontSize: 20,
  },
});
