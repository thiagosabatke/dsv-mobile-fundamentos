import React from "react";
import { View, Text, Image } from "react-native";

import { estilos } from "../styleSheet/estilos";

function Cabecalho() {

  const logo = require("../img/imagem1.jpg");

  return (
    <View style={estilos.area_cabecalho}>

      <Text style={estilos.titulo_app}>
        SECTIONLIST
      </Text>

      <Image
        source={logo}
        style={estilos.logo}
      />

      <Text style={estilos.subtitulo}>
        TODO LIST
      </Text>

    </View>
  );
}

export default Cabecalho;