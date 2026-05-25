import React from 'react';
import { View, Text, SectionList, Image } from 'react-native';
import { estilos } from '../styles/estilos';

export default function Grupos() {
  const dadosGrupos = [
    { 
      titulo: 'GRUPO A', 
      data: [
        { pos: '1º', nome: '🇧🇷 Brasil', pts: '9 pts' },
        { pos: '2º', nome: '🇲🇽 México', pts: '6 pts' },
        { pos: '3º', nome: '🇨🇦 Canadá', pts: '3 pts' },
        { pos: '4º', nome: '🇺🇸 EUA', pts: '0 pts' }
      ] 
    },
    { 
      titulo: 'GRUPO B', 
      data: [
        { pos: '1º', nome: '🇫🇷 França', pts: '9 pts' },
        { pos: '2º', nome: '🇩🇪 Alemanha', pts: '4 pts' },
        { pos: '3º', nome: 'Inglaterra', pts: '2 pts' },
        { pos: '4º', nome: '🇪🇸 Espanha', pts: '1 pt' }
      ] 
    },
  ];

  return (
    <View style={estilos.container}>
      <View style={estilos.headerContainer}>
        <Text style={estilos.titulo}>Classificação</Text>
      </View>

      <SectionList
        ListHeaderComponent={
          <View style={estilos.card}>
            <Image 
              source={require('../img/brasil.jpeg')} 
              style={estilos.imagemBanner} 
            />
            <Text style={estilos.texto}>Acompanhe a pontuação em tempo real da fase de grupos.</Text>
          </View>
        }
        sections={dadosGrupos}
        keyExtractor={(item, index) => item.nome + index}
        
        renderSectionHeader={({ section: { titulo } }) => (
          <Text style={estilos.sectionHeader}>{titulo}</Text>
        )}
        
        renderItem={({ item }) => (
          <View style={estilos.linhaTabela}>
            <Text style={estilos.posicaoTabela}>{item.pos}</Text>
            <Text style={estilos.nomeTabela}>{item.nome}</Text>
            <Text style={estilos.pontosTabela}>{item.pts}</Text>
          </View>
        )}

        renderSectionFooter={() => <View style={estilos.footerTabela} />}
        
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}