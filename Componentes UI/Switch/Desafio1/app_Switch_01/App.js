import React, { useState } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import estilos from './src/estilo'; 

import imgSol from './src/img/sol.png';
import imgLua from './src/img/lua.png';

export default function App() {
  const [modoAtivo, setModoAtivo] = useState(false);

  return (
    <View style={modoAtivo ? estilos.area_fundo1 : estilos.area_fundo2}>
      <Text style={modoAtivo ? estilos.textoEstilo1 : estilos.textoEstilo2}>
        {modoAtivo ? 'Componente Switch' : 'Componente Switch'}
      </Text>
      <Image 
        source={modoAtivo ? imgLua : imgSol} 
        style={modoAtivo ? estilos.imgEstilo1 : estilos.imgEstilo2}
      />

      <Text style={modoAtivo ? estilos.textoEstilo1 : estilos.textoEstilo2}>
        {modoAtivo ? 'Modo Noturno' : 'Modo Claro'}
      </Text>

      <Switch
        value={modoAtivo}
        onValueChange={(valor) => setModoAtivo(valor)}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={modoAtivo ? "#f5dd4b" : "#f4f3f4"}
      />

    </View>
  );
}