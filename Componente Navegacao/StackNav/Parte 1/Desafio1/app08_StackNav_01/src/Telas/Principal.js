import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { estilos } from "../styleSheet/estilos";
import { useNavigation } from "@react-navigation/native";

function Principal() {
    const navigation = useNavigation();
    let img1 = require("../img/img.jpeg")
    let autor = "Thiago Sabatke";
    let data = "11/05/2026";

    function acessaTela(Tela) {
        if(Tela == 'C') navigation.navigate('Carnaval');
        else if(Tela == 'J') navigation.navigate('FestaJunina');
        else if(Tela == 'H') navigation.navigate('Halloween');
    }
    
    return (
        <View style={estilos.Tela_Principal_fundo}>
            <View id="Principal_Cab" style={estilos.Tela_Princpal_Cab}>
                <Text style={estilos.Tela_Princpal_SubTitulo1}>Tela Principal</Text>
                <Text style={estilos.Tela_Princpal_Titulo}>Stack Navigation</Text>
                <Text style={estilos.Tela_Princpal_SubTitulo2}>DSV Mobile</Text>
                <Image source={img1} style={{ width: 200, height: 200 }} />
            </View>
            <View id="Principa_Corpo" style={estilos.Tela_Princpal_Corpo}>
                <Text style={estilos.Tela_Princpal_SubTitulo1}>Curiosidades</Text>
                
                {/* Aqui foram adicionados os eventos onPress */}
                <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('C')}>
                    <Text>Carnaval</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('J')}>
                    <Text>Festa Junina</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={estilos.Tela_Principal_Botoes} onPress={() => acessaTela('H')}>
                    <Text>Halloween</Text>
                </TouchableOpacity>
                
            </View>
            <View id="Principal_Rodape" style={estilos.Tela_Principal_Rodape}>
                <Text>{autor}</Text>
                <Text>{data}</Text>
            </View>
        </View>
    );
}

export default Principal;