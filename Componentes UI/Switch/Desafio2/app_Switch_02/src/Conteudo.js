import React, { useState } from "react";
import { View, Text, TextInput, TouchableHighlight, ScrollView, Switch, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from "@react-native-community/slider";
import { estilos } from "./styleSheet/estilos";

function Conteudo() {
  const [nome, setNome] = useState('');
  const [destino, setDestino] = useState('Suíça');
  const [viajanteFrequente, setViajanteFrequente] = useState(false);
  const [nivel, setNivel] = useState(5.0);
  const [mensagemResultante, setMensagemResultante] = useState('');

  const [corFundoNome, setCorFundoNome] = useState('#FFFFFF');
  const corDeFocoNome = (focado) => setCorFundoNome(focado ? '#FFA500' : '#FFFFFF');

  const confirmarPerfil = () => {
    if (nome.trim() === '') {
      Alert.alert("Atenção", "Por favor, preencha o seu nome.");
      setMensagemResultante('');
      return;
    }

    const statusFrequente = viajanteFrequente 
      ? "é um viajante frequente e ativo" 
      : "viaja ocasionalmente (não ativo)";

    let nivelTexto = '';
    if (nivel <= 3) {
      nivelTexto = `iniciante (${nivel.toFixed(0)})`;
    } else if (nivel <= 7) {
      nivelTexto = `intermediário (${nivel.toFixed(0)})`;
    } else {
      nivelTexto = `avançado (${nivel.toFixed(0)})`;
    }

    const frase = `Olá ${nome}, seu destino favorito é ${destino}, você ${statusFrequente} e o seu nível de explorador é ${nivelTexto}.`;
    setMensagemResultante(frase);
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

        <Text style={estilos.label}>Destino Favorito:</Text>
        <View style={estilos.pickerWrapper}>
          <Picker
            selectedValue={destino}
            onValueChange={(item) => setDestino(item)}
            style={estilos.picker}
          >
            <Picker.Item label="Suíça" value="Suíça" />
            <Picker.Item label="Grécia" value="Grécia" />
            <Picker.Item label="Egito" value="Egito" />
            <Picker.Item label="Brasil" value="Brasil" />
          </Picker>
        </View>

        <View style={estilos.switchRow}>
          <Text style={estilos.labelSwitch}>Viajante Frequente?</Text>
          <Switch
            value={viajanteFrequente}
            onValueChange={(valor) => setViajanteFrequente(valor)}
            trackColor={{ false: "#334155", true: "#EAB308" }}
            thumbColor={viajanteFrequente ? "#f5cb4d" : "#f4f3f4"}
          />
        </View>

        <Text style={estilos.label}>Nível de Aventureiro: {nivel.toFixed(1)}</Text>
        <Slider
          style={estilos.slider}
          minimumValue={0}
          maximumValue={10}
          step={1}
          value={nivel}
          onValueChange={(valor) => setNivel(valor)}
          minimumTrackTintColor="#EAB308"
          maximumTrackTintColor="#334155"
          thumbTintColor="#f5cb4d"
        />

        <TouchableHighlight
          style={estilos.button}
          underlayColor="#CA8A04"
          onPress={confirmarPerfil}
        >
          <Text style={estilos.buttonText}>CONFIRMAR PERFIL</Text>
        </TouchableHighlight>

        {mensagemResultante !== '' && (
          <View style={estilos.resultBox}>
            <Text style={estilos.resultText}>{mensagemResultante}</Text>
          </View>
        )}

      </View>
    </ScrollView>
  );
}
export default Conteudo;