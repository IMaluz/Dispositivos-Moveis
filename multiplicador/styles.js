import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  conta: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    marginTop: 30,
    fontWeight: '200',
    fontSize: 15,
    borderWidth: 2,
    borderColor: '#FFD3E6',
    textAlign: 'center',
    padding: 15,
    borderRadius: 5,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#D79999',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  botao: {
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FFD3E6',
    width: 120,
    padding: 10,
    alignSelf: 'center',
    backgroundColor: '#FFECF4',
  },
  texto: {
    textAlign: 'center',
    fontSize: 18,
  },
  btn: {
    textAlign: 'center',
  },
});

export { styles };
