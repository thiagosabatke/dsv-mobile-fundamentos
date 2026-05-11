import React from "react";
import { View, Text } from "react-native";

import { estilos } from "../styleSheet/estilos";

function Rodape() {

  return (
    <View style={estilos.area_rodape}>

      <Text style={estilos.texto_rodape}>
        Thiago Sabatke
      </Text>

      <Text style={estilos.texto_rodape}>
        10/05/2026
      </Text>

    </View>
  );
}

export default Rodape;