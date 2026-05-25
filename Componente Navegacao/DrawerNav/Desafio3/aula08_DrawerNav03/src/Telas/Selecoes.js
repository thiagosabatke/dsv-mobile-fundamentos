import React, { useState } from 'react';
import { View, Text, TextInput, Image } from 'react-native';
import { estilos } from '../styles/estilos';

export default function Selecoes() {
  const [busca, setBusca] = useState('');

  return (
    <View style={estilos.container}>
      <View style={estilos.headerContainer}>
        <Text style={estilos.titulo}>Hall da Fama</Text>
      </View>
      
      <View style={estilos.card}>

        <Image 
          source={require('../img/pele.jpeg')} 
          style={estilos.imagemBanner} 
        />
        
        <Text style={estilos.subtitulo}>Pesquisar Lenda</Text>
        
        <TextInput 
          style={estilos.input}
          placeholder="Ex: Pelé, Ronaldo..."
          placeholderTextColor="#A0AEC0"
          value={busca}
          onChangeText={(texto) => setBusca(texto)}
        />

        <Text style={estilos.texto}>
          {busca === '' 
            ? 'Digite o nome de um ídolo para buscar seu histórico.' 
            : `Buscando informações sobre: ${busca}...`}
        </Text>
      </View>
    </View>
  );
}