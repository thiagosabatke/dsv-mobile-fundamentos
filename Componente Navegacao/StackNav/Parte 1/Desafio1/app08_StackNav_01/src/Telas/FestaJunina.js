import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from '../styleSheet/estilos';

export default function Tela_FestaJunina() {
    let imgJunina = require("../img/festajunina1.jpeg"); 
    let autor = "Thiago Sabatke";
    let data = "11/05/2026";

    return (
        <View style={estilos.Tela_Festa_fundo}>
            <View style={estilos.Festa_Cab}>
                <Image source={imgJunina} style={estilos.Festa_Img_Cab} />
                <View>
                    <Text style={estilos.Festa_Texto_Destaque}>FESTA JUNINA</Text>
                    <Text style={estilos.Festa_Titulo_Preto}>Curiosidades</Text>
                </View>
            </View>
            <View style={estilos.Festa_Corpo}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={estilos.Festa_Subtitulo}>A Tradição</Text>
                    <Text style={estilos.Festa_Texto}>
                        As festas juninas são tradicionais celebrações que acontecem no mês de junho no Brasil, originadas de festividades europeias em homenagem a três santos católicos: Santo Antônio (dia 13), São João (dia 24) e São Pedro (dia 29).
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>A Culinária</Text>
                    <Text style={estilos.Festa_Texto}>
                        A base da culinária junina é o milho e o amendoim, já que a festa coincide perfeitamente com a época da colheita do milho no Brasil. Pratos deliciosos como pamonha, canjica, pé de moleque, paçoca, curau e o famoso quentão são marcas registradas do evento.
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>A Fogueira</Text>
                    <Text style={estilos.Festa_Texto}>
                        A fogueira é um dos símbolos mais fortes da festa. Segundo a lenda católica, um acordo foi feito entre as primas Maria e Isabel: para avisar Maria sobre o nascimento de São João Batista, Isabel acenderia uma grande fogueira sobre um monte.
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>A Origem da Quadrilha</Text>
                    <Text style={estilos.Festa_Texto}>
                        A típica dança de quadrilha, cheia de comandos específicos, tem influência direta das danças de salão da nobreza europeia, principalmente da França (a "quadrille"). Expressões como "anarriê" (em francês, "en arrière" - para trás) e "alavantú" ("en avant tout" - todos para frente) evidenciam essa herança.
                    </Text>
                </ScrollView>
            </View>
            <View style={estilos.Festa_Rodape}>
                <Text style={estilos.Festa_Texto_Rodape}>{autor}</Text>
                <Text style={estilos.Festa_Texto_Rodape}>{data}</Text>
            </View>
        </View>
    );
}