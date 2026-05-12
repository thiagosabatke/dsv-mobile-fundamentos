import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
    Tela_Principal_fundo: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        borderWidth: 15,
        borderColor: '#E0E0E0', 
        borderTopLeftRadius: 30, 
        borderBottomLeftRadius: 30,
        padding: 20,
        justifyContent: 'space-between', 
    },
    Tela_Princpal_Cab: {
        alignItems: 'center',
        marginTop: 20,
    },
    Tela_Princpal_SubTitulo1: {
        fontSize: 20,
        color: '#000000',
        marginBottom: 5,
    },
    Tela_Princpal_Titulo: {
        fontSize: 32,
        color: '#000000',
        marginBottom: 5,
    },
    Tela_Princpal_SubTitulo2: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 15,
    },
    Tela_Princpal_Corpo: {
        alignItems: 'center',
        marginTop: 10,
    },
    Tela_Principal_Botoes: {
        borderWidth: 1.5,
        borderColor: '#8B0000', 
        borderRadius: 25,
        paddingVertical: 10,
        width: 180,
        alignItems: 'center',
        marginTop: 15,
        backgroundColor: '#FFFFFF',
    },
    Tela_Principal_Rodape: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 20,
    },

    Tela_Festa_fundo: {
        flex: 1,
        padding: 15,
  
        backgroundColor: 'darkred', 
    },
    Festa_Cab: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    Festa_Img_Cab: {
        width: 80,
        height: 80,
        marginRight: 20,
        resizeMode: 'contain',
    },
    Festa_Texto_Destaque: {
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: 'red',
    },
    Festa_Titulo_Preto: {
        color: 'black',
        fontSize: 18,
    },
    Festa_Corpo: {
        backgroundColor: '#FFFFFF',
        flex: 1,
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
    },
    Festa_Subtitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'darkred',
        marginTop: 10,
        marginBottom: 5,
    },
    Festa_Texto: {
        fontSize: 15,
        color: '#333333',
        textAlign: 'justify',
        marginBottom: 15,
        lineHeight: 22,
    },
    Festa_Rodape: {
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 10,
    },
    Festa_Texto_Rodape: {
        color: '#000000',
        fontWeight: 'bold',
    }
});