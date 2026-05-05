import React from "react";
import { View, Text } from 'react-native';
import { estilos } from "../styleSheet/estilos";

function Rodape() {
  let autor = "Thiago Sabatke";
  let data = "04/05/2026";
  
  return (
    <View style={estilos.area_rodape}>
      <Text style={estilos.texto_rodape}>{autor}</Text>
      <Text style={estilos.texto_rodape}>{data}</Text>
    </View>
  );
}
export default Rodape;