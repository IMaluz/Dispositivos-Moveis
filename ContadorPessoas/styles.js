import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mais: {
    alignSelf: 'center',
    width: 280,
    height: 50,
    margin: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    fontSize: 38,
    color: 'white',
  },
  menos: {
    alignSelf: 'center',
    width: 280,
    height: 50,
    margin: 20,
    backgroundColor: 'red',
    textAlign: 'center',
    fontSize: 38,
    color: 'white',
  },
  conta: {
    alignSelf: 'center',
    textAlignVertical: 'center',
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: 'bold',
    fontSize: 75,
    color: 'red',
    borderWidth: 2,
    borderColor: 'black',
  },
  titulo: {
    textAlign: 'center',
    fontSize: 20,
    color: '#D79999',
    fontWeight: 'bold',
  },
  texto: {
    textAlign: 'center',
    fontSize: 38,
    color: 'white',
  },
});

export { styles };
