import React from "react";
import { View, Text, ScrollView } from "react-native";

import { estilos } from "../styles/estilos";

export default function Jogadores() {

  return (

    <ScrollView style={estilos.container}>

      <Text style={estilos.titulo}>
        Jogadores Históricos
      </Text>

      <View style={estilos.card}>

        <Text style={estilos.subtitulo}>
          Pelé
        </Text>

        <Text style={estilos.texto}>
          Único jogador tricampeão mundial.
          Considerado um dos maiores jogadores
          da história do futebol.
        </Text>

      </View>

      <View style={estilos.card}>

        <Text style={estilos.subtitulo}>
          Messi
        </Text>

        <Text style={estilos.texto}>
          Campeão da Copa do Mundo de 2022
          pela Argentina e vencedor de várias
          Bolas de Ouro.
        </Text>

      </View>

      <View style={estilos.card}>

        <Text style={estilos.subtitulo}>
          Ronaldo Fenômeno
        </Text>

        <Text style={estilos.texto}>
          Bicampeão mundial com o Brasil
          e artilheiro histórico das Copas
          por muitos anos.
        </Text>

      </View>

    </ScrollView>
  );
}