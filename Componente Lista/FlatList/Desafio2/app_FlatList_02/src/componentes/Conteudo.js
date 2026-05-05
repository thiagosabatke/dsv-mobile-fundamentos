import React from "react";
import { View, Text, FlatList } from 'react-native';
import { estilos } from "../styleSheet/estilos";

import dadosPaises from '../dados/paises.json';

function Conteudo() {
  
  const renderItem = ({ item }) => (
    <View style={estilos.itemContainer}>
      <View style={estilos.infoLinha}>
        <Text style={estilos.labelLista}>País:</Text>
        <Text style={estilos.textoPais}>{item.pais}</Text>
      </View>
      <View style={estilos.infoLinha}>
        <Text style={estilos.labelLista}>Capital:</Text>
        <Text style={estilos.textoCapital}>{item.capital}</Text>
      </View>
    </View>
  );

  const renderSeparator = () => (
    <View style={estilos.separador} />
  );

  const renderHeader = () => (
    <View style={estilos.listaHeader}>
      <Text style={estilos.listaHeaderText}>DESTINOS DISPONÍVEIS</Text>
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