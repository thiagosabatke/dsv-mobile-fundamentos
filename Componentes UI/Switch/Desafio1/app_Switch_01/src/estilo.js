import { StyleSheet } from 'react-native';

const estilos = StyleSheet.create({
  area_fundo1: {
    flex: 1,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoEstilo1: {
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imgEstilo1: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },


  area_fundo2: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  textoEstilo2: {
    fontSize: 25,
    color: '#000',
    marginTop: 20,
  },
  imgEstilo2: {
    width: 300,
    height: 300,
  },
});

export default estilos;