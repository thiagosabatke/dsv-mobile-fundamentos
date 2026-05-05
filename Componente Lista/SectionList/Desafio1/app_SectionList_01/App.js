import React from 'react';
import { View, Text, SectionList, TouchableOpacity, Alert, Platform, Image, SafeAreaView, StatusBar } from 'react-native';
import dadosDestinos from './src/dados/paises.json';
import { estilos } from './src/styleSheet/estilos';

function App() {
  const img_logo = require('./src/img/imagem1.jpg');
  const tituloApp = "AVALIAÇÃO DE VIAGEM";

  const autor = "Thiago Sabatke";
  const data = "04/05/2026";

  function mostrarDetalhes(destino) {
    const mensagem = `Capital: ${destino.capital}\n` +
                     `Idioma: ${destino.idioma}\n` +
                     `Moeda: ${destino.moeda}`;

    if (Platform.OS === 'web') {
      alert(destino.nome + '\n\n' + mensagem);
    } else {
      Alert.alert(destino.nome, mensagem);
    }
  }

  function mostraItem({ item }) {
    return (
      <TouchableOpacity
        style={estilos.itemContainer}
        onPress={() => mostrarDetalhes(item)}
        activeOpacity={0.7}
      >
        <View style={estilos.infoLinha}>
          <Text style={estilos.labelLista}>PAÍS:</Text>
          <Text style={estilos.textoPrincipal}>{item.nome}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function mostraCabecalhoLista({ section }) {
    return (
      <View style={estilos.sectionHeader}>
        <Text style={estilos.sectionHeaderText}>{section.title}</Text>
      </View>
    );
  }

  function extrairId(item) {
    return item.id;
  }

  return (
    <SafeAreaView style={estilos.area_fundo}>
      <StatusBar barStyle="light-content" backgroundColor="#1E293B" />

      <View style={estilos.area_cabecalho}>
        <Image source={img_logo} style={estilos.img_cabecalho} />
        <Text style={estilos.titulo_cabecalho}>{tituloApp}</Text>
      </View>

      <View style={estilos.area_conteudo}>
        <SectionList
          sections={dadosDestinos}
          keyExtractor={extrairId}
          renderItem={mostraItem}
          renderSectionHeader={mostraCabecalhoLista}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </View>

      <View style={estilos.area_rodape}>
        <Text style={estilos.texto_rodape}>{autor}</Text>
        <Text style={estilos.texto_rodape}>{data}</Text>
      </View>
      
    </SafeAreaView>
  );
}

export default App;