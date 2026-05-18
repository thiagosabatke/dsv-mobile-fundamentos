import React from "react";
import { View, Text, Image } from "react-native";

import { estilos } from "../styles/estilos";

export default function Home() {

  const img = require("../img/copa.jpeg");

  return (

    <View style={estilos.container}>

      <Image
        source={img}
        style={estilos.imagem}
      />

      <Text style={estilos.titulo}>
        Copa do Mundo
      </Text>

      <Text style={estilos.texto}>
        A Copa do Mundo é o maior torneio de futebol do planeta,
        organizado pela FIFA e realizado a cada quatro anos.
        O evento reúne as melhores seleções do mundo e movimenta
        bilhões de torcedores apaixonados por futebol.
      </Text>

    </View>
  );
}