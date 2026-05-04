import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  scrollContainer: {
    flexGrow: 1,
  },
  headerContainer: {
    backgroundColor: '#1E293B',
    paddingVertical: 35,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#EAB308',
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 10,
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F8FAFC',
    letterSpacing: 2,
  },
  contentBody: {
    padding: 25,
    alignItems: 'center',
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 14,
    color: '#94A3B8',
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#334155',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
  },
  pickerWrapper: {
    width: '100%',
    backgroundColor: '#F8FAFC',
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 25,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#f5cb4d',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#0F172A',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultBox: {
    width: '100%',
    marginTop: 30,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#1E293B',
    borderWidth: 1,
    borderColor: '#EAB308',
  },
  resultText: {
    fontSize: 16,
    color: '#F1F5F9',
    textAlign: 'center',
    lineHeight: 24,
  },
});