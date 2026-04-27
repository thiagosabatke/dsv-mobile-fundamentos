import React from 'react';
import { View } from 'react-native';
import Cabecalho from './src/Cabecalho';
import Conteudo from './src/Conteudo';
import { styles } from './src/styleSheet/estilo';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho />
      <Conteudo />
    </View>
  );
}