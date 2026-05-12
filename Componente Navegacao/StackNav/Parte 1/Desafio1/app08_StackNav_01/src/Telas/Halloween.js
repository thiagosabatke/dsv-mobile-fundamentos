import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from '../styleSheet/estilos';

export default function Tela_Halloween() {
    let imgHalloween = require("../img/halloween.jpg"); 
    let autor = "Thiago Sabatke";
    let data = "11/05/2026";

    return (
        <View style={estilos.Tela_Festa_fundo}>
            <View style={estilos.Festa_Cab}>
                <Image source={imgHalloween} style={estilos.Festa_Img_Cab} />
                <View>
                    <Text style={estilos.Festa_Texto_Destaque}>HALLOWEEN</Text>
                    <Text style={estilos.Festa_Titulo_Preto}>Curiosidades</Text>
                </View>
            </View>
            <View style={estilos.Festa_Corpo}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={estilos.Festa_Subtitulo}>As Raízes Celtas</Text>
                    <Text style={estilos.Festa_Texto}>
                        O Halloween originou-se do antigo festival celta de Samhain, celebrado há mais de 2.000 anos nas regiões onde hoje ficam a Irlanda, o Reino Unido e o norte da França. O festival marcava o fim do verão e o início do ano novo celta.
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>Doces ou Travessuras</Text>
                    <Text style={estilos.Festa_Texto}>
                        A tradição do "Trick or Treat" surgiu na Europa na Idade Média. Pessoas pobres iam de porta em porta oferecendo-se para rezar pelas almas dos parentes falecidos em troca de um bolo especial, chamado "bolo da alma". A tradição foi revivida como brincadeira nos EUA na década de 1920.
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>A Lenda de Jack O'Lantern</Text>
                    <Text style={estilos.Festa_Texto}>
                        A abóbora iluminada vem de um conto irlandês sobre um homem chamado Jack, que enganou o diabo várias vezes. Ao morrer, sua entrada foi negada tanto no céu quanto no inferno. Ele foi condenado a vagar pela Terra com apenas um carvão em brasa dentro de um nabo esculpido para iluminar seu caminho. Quando a tradição chegou à América, as abóboras substituíram os nabos por serem mais abundantes.
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>As Cores Oficiais</Text>
                    <Text style={estilos.Festa_Texto}>
                        O laranja e o preto são as cores tradicionais do Halloween. O laranja representa o outono, a colheita e a força, enquanto o preto simboliza a morte, a escuridão e a transição da vida, refletindo perfeitamente a origem mística da data.
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