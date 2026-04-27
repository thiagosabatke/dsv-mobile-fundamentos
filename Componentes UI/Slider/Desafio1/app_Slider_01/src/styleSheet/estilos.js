import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    area_fundo: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    area_cabecalho: {
        alignItems: 'center',
        paddingTop: 40, 
        paddingBottom: 20,
    },
    img_cabecalho: {
        width: 150,
        height: 150,
        marginBottom: 10,
        resizeMode: 'contain',
    },
    titulo_cabecalho: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f10000', 
    },
    area_conteudo: {
        flex: 1,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 15,
  
    },
    texto_conteudo: {
        fontSize: 14,
        marginBottom: 5,
        marginTop: 10,
    },
    inputNome_conteudo: {
        borderWidth: 1,
        borderColor: '#666',
        borderRadius: 8,
        height: 40,
        paddingHorizontal: 10,
        marginBottom: 15,
  
    },
    slider1: {
        width: '100%',
        height: 40,
    },
    botao_conteudo: {
        backgroundColor: '#ff0000', 
        width: 100,
        height: 50,
        borderRadius: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 30,
    },
    area_rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    texto_rodape: {
        fontSize: 14,
        color: '#333',
    }
});