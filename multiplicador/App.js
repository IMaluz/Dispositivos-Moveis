import React, { Component } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mult: 0,
      num1: 0,
      num2: 0,
    };

    this.result = this.result.bind(this);
    this.pegan1 = this.pegan1.bind(this);
    this.pegan2 = this.pegan2.bind(this);
  }

  result() {
    let n1 = this.state.num1;
    let n2 = this.state.num2;
    this.setState({
      mult: n1 * n2,
    });
  }
  pegan1(valor) {
    this.setState({
      num1: valor,
    });
  }
  pegan2(valor) {
    this.setState({
      num2: valor,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>

        <TextInput
          style={styles.conta}
          placeholder="Insira um número"
          onChangeText={this.pegan1}
        />

        <TextInput
          style={styles.conta}
          placeholder="Insira outro número"
          onChangeText={this.pegan2}
        />

        <Pressable onPress={this.result} style={styles.botao}>
          <Text style={styles.btn}>Calcular</Text>
        </Pressable>
        <Text style={styles.texto}>
          O resultado de {this.state.num1} X {this.state.num2} é igual a = {this.state.mult}
        </Text>
      </View>
    );
  }
}

export default App;
