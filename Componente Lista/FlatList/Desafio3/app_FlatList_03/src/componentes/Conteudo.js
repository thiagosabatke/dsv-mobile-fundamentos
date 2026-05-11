import React from "react";
import { View, Text, FlatList, Image } from 'react-native';
import { estilos } from "../styleSheet/estilos";

import dadosPaises from '../dados/paises.json';

function Conteudo() {

  const imagens = {
    brasil: require('../img/paises/brasil.png'),
    argentina: require('../img/paises/argentina.png'),
    chile: require('../img/paises/chile.png'),
    paraguai: require('../img/paises/paraguai.png'),
    uruguai: require('../img/paises/uruguai.png'),
    eua: require('../img/paises/eua.png'),
    canada: require('../img/paises/canada.png'),
    mexico: require('../img/paises/mexico.png'),
    franca: require('../img/paises/franca.png'),
    alemanha: require('../img/paises/alemanha.png'),
  };

  const renderItem = ({ item }) => (
    <View style={estilos.itemContainer}>

      <Image
        source={imagens[item.imagem]}
        style={estilos.imagemPais}
      />

      <View style={estilos.infoCard}>

        <Text style={estilos.nomePais}>
          {item.pais}
        </Text>

        <Text style={estilos.textoInfo}>
          Capital: {item.capital}
        </Text>

        <Text style={estilos.textoInfo}>
          População: {item.populacao}
        </Text>

        <Text style={estilos.textoInfo}>
          Continente: {item.continente}
        </Text>

      </View>

    </View>
  );

  const renderSeparator = () => (
    <View style={estilos.separador} />
  );

  const renderHeader = () => (
    <View style={estilos.listaHeader}>
      <Text style={estilos.listaHeaderText}>
        DESTINOS DISPONÍVEIS
      </Text>
    </View>
  );

  return (
    <View style={estilos.area_conteudo}>
      <FlatList
        data={dadosPaises}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={renderSeparator}
        ListHeaderComponent={renderHeader}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

export default Conteudo;