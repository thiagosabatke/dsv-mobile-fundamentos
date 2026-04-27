import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './styleSheet/estilo';

const Cabecalho = () => {
  return (
    <View style={styles.headerContainer}>
      <Image 
        source={require('./img/imagem1.jpg')} 
        style={styles.logo}
      />
      <Text style={styles.headerTitle}>COMPANIA DE VIAGENS</Text>
    </View>
  );
};

export default Cabecalho;