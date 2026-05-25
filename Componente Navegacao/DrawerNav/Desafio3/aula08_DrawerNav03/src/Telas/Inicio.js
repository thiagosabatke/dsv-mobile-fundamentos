import React, { useState } from 'react';
import { View, Text, Image, Switch } from 'react-native';
import { estilos } from '../styles/estilos';

export default function Inicio() {
  const [notificacoes, setNotificacoes] = useState(false);

  return (
    <View style={estilos.container}>
      <View style={estilos.headerContainer}>
        <Text style={estilos.titulo}>Copa 2026</Text>
      </View>
      
      <View style={estilos.card}>
        <Image 
          source={require('../img/bola.jpeg')} 
          style={estilos.imagemBanner} 
        />
        
        <Text style={estilos.subtitulo}>Tudo Pronto!</Text>
        <Text style={estilos.texto}>Acompanhe sua seleção favorita e não perca nenhum lance.</Text>
      </View>
    </View>
  );
}