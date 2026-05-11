import React, { useState } from "react";

import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  SectionList,
} from "react-native";

import { estilos } from "../styleSheet/estilos";

function Conteudo() {

  const [tarefa, setTarefa] = useState("");
  const [data, setData] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function adicionarTarefa() {

    if (tarefa === "" || data === "") {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    const copia = [...tarefas];

    const secaoExistente = copia.find(
      item => item.title === data
    );

    if (secaoExistente) {

      secaoExistente.data.push(tarefa);

    } else {

      copia.push({
        title: data,
        data: [tarefa]
      });

    }

    copia.sort((a, b) => {

      const dataA = a.title.split('/').reverse().join('');
      const dataB = b.title.split('/').reverse().join('');

      return dataA.localeCompare(dataB);

    });

    setTarefas(copia);

    setTarefa("");
    setData("");
  }

  return (
    <View style={estilos.area_conteudo}>

      <TextInput
        placeholder="Digite a tarefa"
        placeholderTextColor="#555"
        style={estilos.input}
        value={tarefa}
        onChangeText={setTarefa}
      />

      <TextInput
        placeholder="Data (ex: 10/05/2026)"
        placeholderTextColor="#555"
        style={estilos.input}
        value={data}
        onChangeText={setData}
      />

      <TouchableOpacity
        style={estilos.botao}
        onPress={adicionarTarefa}
      >
        <Text style={estilos.texto_botao}>
          Adicionar
        </Text>
      </TouchableOpacity>

      <SectionList
        sections={tarefas}
        keyExtractor={(item, index) => item + index}

        renderItem={({ item, section }) => (

          <TouchableOpacity
            style={estilos.item}
            onPress={() =>
              removerTarefa(section.title, item)
            }
          >
            <Text style={estilos.texto_item}>
              {item}
            </Text>
          </TouchableOpacity>

        )}

        renderSectionHeader={({ section }) => (

          <View style={estilos.header_secao}>
            <Text style={estilos.texto_secao}>
              {section.title}
            </Text>
          </View>

        )}

        showsVerticalScrollIndicator={false}
      />

    </View>
  );
}

export default Conteudo;