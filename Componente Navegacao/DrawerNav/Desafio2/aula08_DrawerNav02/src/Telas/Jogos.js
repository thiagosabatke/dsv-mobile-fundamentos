import React from 'react';
import { View, Text } from 'react-native';
import { estilos } from '../styles/estilos';

export default function Jogos() {
  return (
    <View style={estilos.container}>
      <View style={estilos.headerContainer}>
        <Text style={estilos.titulo}>Agenda de Jogos</Text>
      </View>
      
      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Quinta-feira - 16:00</Text>
        <View style={estilos.jogoRow}>
          <Text style={estilos.time}>Brasil 🇧🇷</Text>
          <Text style={estilos.versus}>X</Text>
          <Text style={estilos.time}>🇲🇽 México</Text>
        </View>
      </View>

      <View style={estilos.card}>
        <Text style={estilos.subtitulo}>Segunda-feira - 13:00</Text>
        <View style={estilos.jogoRow}>
          <Text style={estilos.time}>Canadá 🇨🇦</Text>
          <Text style={estilos.versus}>X</Text>
          <Text style={estilos.time}>🇺🇸 EUA</Text>
        </View>
      </View>
    </View>
  );
}