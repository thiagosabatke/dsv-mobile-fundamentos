import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { estilos } from '../styleSheet/estilos';

export default function Tela_Carnaval() {
    let imgCarnaval = require("../img/carnaval1.jpeg"); 
    let autor = "Thiago Sabatke";
    let data = "11/05/2026";

    return (
        <View style={estilos.Tela_Festa_fundo}>
            <View style={estilos.Festa_Cab}>
                <Image source={imgCarnaval} style={estilos.Festa_Img_Cab} />
                <View>
                    <Text style={estilos.Festa_Texto_Destaque}>CARNAVAL</Text>
                    <Text style={estilos.Festa_Titulo_Preto}>Curiosidades</Text>
                </View>
            </View>
            <View style={estilos.Festa_Corpo}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={estilos.Festa_Subtitulo}>A Origem</Text>
                    <Text style={estilos.Festa_Texto}>
                        A história do carnaval remonta à Antiguidade, com festas para celebrar colheitas e homenagear deuses. No Brasil, a festa chegou no período colonial através do "Entrudo", uma brincadeira de matriz portuguesa que envolvia jogar água, limões de cheiro e farinha nas pessoas pelas ruas.
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>O Nascimento do Samba</Text>
                    <Text style={estilos.Festa_Texto}>
                        O samba, que hoje é o ritmo oficial da festa, tem raízes africanas e nasceu na Bahia, ganhando o formato que conhecemos hoje nos morros do Rio de Janeiro no início do século XX. O primeiro samba gravado em estúdio foi "Pelo Telefone", no ano de 1916.
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>O Maior Bloco do Mundo</Text>
                    <Text style={estilos.Festa_Texto}>
                        O "Galo da Madrugada", que desfila tradicionalmente pelas ruas do Recife (PE), entrou para o Guinness Book (o Livro dos Recordes) como o maior bloco de carnaval do planeta, chegando a arrastar mais de 2 milhões de foliões.
                    </Text>
                    <Text style={estilos.Festa_Subtitulo}>A Invenção do Trio Elétrico</Text>
                    <Text style={estilos.Festa_Texto}>
                        No ano de 1950, em Salvador, a dupla de músicos Dodô e Osmar adaptou um velho carro da marca Ford, conhecido como "Fobica", e instalou alto-falantes em cima dele para tocar nas ruas. Essa invenção revolucionou a festa e deu origem aos gigantescos trios elétricos modernos.
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