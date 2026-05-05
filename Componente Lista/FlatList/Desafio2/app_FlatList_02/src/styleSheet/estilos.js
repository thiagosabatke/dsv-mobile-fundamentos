import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#0F172A', // Azul Escuro
  },
  area_cabecalho: {
    backgroundColor: '#1E293B',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#EAB308', // Amarelo/Ouro
  },
  img_cabecalho: {
    width: 100,
    height: 100,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  titulo_cabecalho: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
    letterSpacing: 2,
  },
  area_conteudo: {
    flex: 1,
    paddingHorizontal: 20,
  },
  /* --- Estilos específicos da FlatList --- */
  listaHeader: {
    backgroundColor: '#EAB308',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 5,
  },
  listaHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    letterSpacing: 1,
  },
  itemContainer: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#EAB308',
    // Sombra para o cartão
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  infoLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  labelLista: {
    color: '#EAB308',
    fontWeight: 'bold',
    marginRight: 8,
    fontSize: 14,
    textTransform: 'uppercase',
  },
  textoPais: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  textoCapital: {
    fontSize: 16,
    color: '#94A3B8',
  },
  separador: {
    height: 12, // Espaçamento entre os itens
  },
  /* --------------------------------------- */
  area_rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1E293B',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  texto_rodape: {
    fontSize: 12,
    color: '#94A3B8',
  }
});