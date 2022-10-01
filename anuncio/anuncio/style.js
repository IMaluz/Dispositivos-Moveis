import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
  area: {
    marginTop: 50,
  },
  textoPrincipal: {
    fontSize: 35,
    color: '#FF0000',
    fontWeight: 'bold',
    margin: 5,
  },
  texto: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
  },
  alinhaTexto: {
    textAlign: 'center',
  },
  fontePrincipal: {
    fontSize: 80,
  },
  botao1: {
    width: 200,
    height: 50,
    margin: 15,
    backgroundColor: '#5A4FCF',
    alignSelf: 'center',
  },
  textoBotao: {
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 50,
    fontSize: 35,
    fontWeight: 'bold',
  },
  input: {
    height: 45,
    borderWidth: 2,
    borderColor: '#222',
    margin: 5,
    fontSize: 20,
    padding: 5,
  },
  imagemFini: {
    width: 280,
    height: 200,
    alignSelf: 'center',
  },
   imagemNutella: {
    width: 150,
    height: 200,
    alignSelf: 'center',
  },
  container: {
    flex: 1,
  },
    box1:{
    borderWidth: 2,
    borderColor: '#222',
    height: 400,
    width: 300,
  },
  box2:{
    borderWidth: 2,
    borderColor: '#222',
    backgroundColor: 'green',
    height: 400,
    width: 300,
  },
  textoRiscado: {
    textDecorationLine: 'line-through',
  }
});

export { style };