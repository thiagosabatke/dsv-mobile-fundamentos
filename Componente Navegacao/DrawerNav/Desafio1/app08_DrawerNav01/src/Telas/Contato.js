import React from "react";
import { View, Text, ScrollView } from "react-native";

import { estilos } from "../styles/estilos";

export default function Selecoes() {

  return (

    <ScrollView style={estilos.container}>

      <Text style={estilos.titulo}>
        Seleções Campeãs
      </Text>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Brasil 🇧🇷</Text>

        <Text style={estilos.texto}>
          Maior campeão da Copa do Mundo com 5 títulos:
          1958, 1962, 1970, 1994 e 2002.
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Alemanha 🇩🇪</Text>

        <Text style={estilos.texto}>
          A Alemanha possui 4 títulos mundiais e sempre
          chega como favorita nas competições.
        </Text>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Argentina 🇦🇷</Text>

        <Text style={estilos.texto}>
          Atual campeã mundial e seleção de grandes craques
          como Maradona e Messi.
        </Text>
      </View>

    </ScrollView>
  );
}