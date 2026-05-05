import { StyleSheet } from 'react-native';

export const estilos = StyleSheet.create({
  area_fundo: {
    flex: 1,
    backgroundColor: '#0F172A', 
  },
  area_cabecalho: {
    backgroundColor: '#1E293B',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#EAB308', 
  },
  img_cabecalho: {
    width: 200,
    height: 200,
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
  sectionHeader: {
    backgroundColor: '#EAB308',
    padding: 12,
    borderRadius: 8,
    marginTop: 25,
    marginBottom: 10,
    alignItems: 'center',
    elevation: 5,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F172A',
    letterSpacing: 2,
  },
  itemContainer: {
    backgroundColor: '#1E293B',
    padding: 20,
    borderRadius: 12,
    borderLeftWidth: 6,
    borderLeftColor: '#EAB308',
    marginBottom: 12, 
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
  },
  textoPrincipal: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F8FAFC',
  },
  textoClique: {
    fontSize: 12,
    color: '#94A3B8',
    marginTop: 10,
    fontStyle: 'italic',
  },

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