import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, ScrollView, Alert } from 'react-native';
import Slider from "@react-native-community/slider";
import { estilos } from "./styleSheet/estilos";

function Conteudo() {
  const [nome, setNome] = useState('');
  const [nota, setNota] = useState(8.0);
  const [comentario, setComentario] = useState('');
  const [resultado, setResultado] = useState(null);

  const [corFundoNome, setCorFundoNome] = useState('#FFFFFF');
  const [corFundoComentario, setCorFundoComentario] = useState('#FFFFFF');

  const corDeFocoNome = (focado) => setCorFundoNome(focado ? '#FFA500' : '#FFFFFF');
  const corDeFocoComentario = (focado) => setCorFundoComentario(focado ? '#FFA500' : '#FFFFFF');

  const avaliar = () => {
    if (nome.trim() === '') {
      Alert.alert("Atenção", "Por favor, digite seu nome antes de avaliar!");
      return;
    }

    setResultado({ nome, nota, comentario });
  };

  return (
    <ScrollView contentContainerStyle={estilos.scrollContainer}>
      <View style={estilos.area_conteudo}>
        
        <Text style={estilos.label}>Nome do Viajante:</Text>
        <TextInput 
          style={[estilos.input, { backgroundColor: corFundoNome }]}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          onFocus={() => corDeFocoNome(true)}
          onBlur={() => corDeFocoNome(false)}
        />

        <Text style={estilos.label}>Nota da Experiência: {nota.toFixed(1)}</Text>
        <Slider
          style={estilos.slider}
          minimumValue={0}
          maximumValue={10}
          step={0.5}
          value={nota}
          onValueChange={(valor) => setNota(valor)}
          minimumTrackTintColor="#EAB308"
          maximumTrackTintColor="#334155"
          thumbTintColor="#f5cb4d"
        />

        <Text style={estilos.label}>Deixe seu comentário:</Text>
        <TextInput 
          style={[estilos.textArea, { backgroundColor: corFundoComentario }]}
          placeholder="Como foi sua viagem?"
          multiline={true}
          value={comentario}
          onChangeText={setComentario}
          onFocus={() => corDeFocoComentario(true)}
          onBlur={() => corDeFocoComentario(false)}
        />

        <TouchableHighlight
          style={estilos.button}
          underlayColor="#CA8A04"
          onPress={avaliar}
        >
          <Text style={estilos.buttonText}>ENVIAR AVALIAÇÃO</Text>
        </TouchableHighlight>

        {resultado && (
          <View style={estilos.resultBox}>
            <Text style={estilos.resultTitle}>Obrigado pelo feedback!</Text>
            <Text style={estilos.resultText}>Nome: {resultado.nome}</Text>
            <Text style={estilos.resultText}>Nota: {resultado.nota.toFixed(1)} ⭐</Text>
            <Text style={estilos.resultText}>Comentário: {resultado.comentario}</Text>
          </View>
        )}

      </View>
    </ScrollView>
  );
}
export default Conteudo;