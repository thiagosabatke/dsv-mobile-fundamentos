import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  area_fundo: {
    flex: 1,
    backgroundColor: '#7A9B6F',
  },

  area_cabecalho: {
    alignItems: 'center',
    marginTop: 50,
  },

  titulo_app: {
    fontSize: 26,
    color: '#FFF',
    marginBottom: 10,
  },

  logo: {
    width: 90,
    height: 90,
    marginBottom: 10,
  },

  subtitulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FF7F32',
    marginBottom: 20,
  },

  area_conteudo: {
    flex: 1,
    paddingHorizontal: 30,
  },

  input: {
    backgroundColor: '#F2D48C',
    padding: 15,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 18,
  },

  botao: {
    backgroundColor: '#7A0000',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
    width: 120,
    alignSelf: 'center',
  },

  texto_botao: {
    color: '#FF7F32',
    fontSize: 22,
  },

  header_secao: {
    backgroundColor: '#DDD',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  texto_secao: {
    fontWeight: 'bold',
    fontSize: 20,
  },

  item: {
    backgroundColor: '#EEE',
    padding: 18,
    borderRadius: 8,
    marginBottom: 10,
  },

  texto_item: {
    fontSize: 18,
  },

  area_rodape: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFF',
    padding: 15,
  },

  texto_rodape: {
    fontSize: 18,
  }

});