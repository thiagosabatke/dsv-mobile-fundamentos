import React, { useState } from 'react';
import { View, Text, TextInput, TouchableHighlight, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { styles } from './styleSheet/estilo';

const Conteudo = () => {
  const [nome, setNome] = useState('');
  const [destino, setDestino] = useState('Suíça');
  const [mensagem, setMensagem] = useState('');
  const [corFundo, setCorFundo] = useState('#FFFFFF');

  const corDeFoco = (focado) => {
    setCorFundo(focado ? '#FFA500' : '#FFFFFF');
  };

  const confirmarEscolha = () => {
    if (nome.trim() === '') {
      setMensagem('Por favor, Digite seu nome!');
    } else {
      setMensagem(`Prezado ${nome}, temos reservas para ${destino} a partir de janeiro. Entre em contato para mais detalhes!`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.contentBody}>
        <Text style={styles.label}>Nome Completo:</Text>
        <TextInput
          style={[styles.input, { backgroundColor: corFundo }]}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
          onFocus={() => corDeFoco(true)}
          onBlur={() => corDeFoco(false)}
        />

        <Text style={styles.label}>Destino do Sonho:</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={destino}
            onValueChange={(item) => setDestino(item)}
            style={styles.picker}
          >
            <Picker.Item label="Suíça" value="Suíça" />
            <Picker.Item label="Grécia" value="Grécia" />
            <Picker.Item label="Egito" value="Egito" />
            <Picker.Item label="Brasil" value="Brasil" />
          </Picker>
        </View>

        <TouchableHighlight
          style={styles.button}
          underlayColor="#CA8A04"
          onPress={confirmarEscolha}
        >
          <Text style={styles.buttonText}>VERIFICAR DISPONIBILIDADE</Text>
        </TouchableHighlight>

        {mensagem !== '' && (
          <View style={styles.resultBox}>
            <Text style={styles.resultText}>{mensagem}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default Conteudo;