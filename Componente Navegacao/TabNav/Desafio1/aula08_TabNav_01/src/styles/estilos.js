import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#006400",
    textAlign: "center",
    marginBottom: 20,
  },

  subtitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
    marginTop: 20,
    marginBottom: 10,
  },

  texto: {
    fontSize: 16,
    color: "#333",
    textAlign: "justify",
    lineHeight: 24,
  },

  imagem: {
    width: 220,
    height: 220,
    alignSelf: "center",
    marginBottom: 20,
    resizeMode: "contain",
  },

  card: {
    backgroundColor: "#FFFFFF",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 5,
  }

});