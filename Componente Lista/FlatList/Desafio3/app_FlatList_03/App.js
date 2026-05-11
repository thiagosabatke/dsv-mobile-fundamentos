import React from "react";
import { View, StatusBar } from 'react-native';
import { estilos } from "./src/styleSheet/estilos";
import Cabecalho from "./src/componentes/Cabecalho";
import Conteudo from "./src/componentes/Conteudo";
import Rodape from "./src/componentes/Rodape";

export default function App() {
  return (
    <View style={estilos.area_fundo}>
      <StatusBar barStyle="light-content" backgroundColor="#1E293B" />
      <Cabecalho />
      <Conteudo />
      <Rodape />
    </View>
  );
}