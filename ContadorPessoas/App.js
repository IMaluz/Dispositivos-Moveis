import React, { Component } from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cont: 0,
    };

    this.cont = this.add.bind(this);
    this.cont = this.remove.bind(this);
  }

  add() {
    this.setState({
      cont: this.state.cont + 1,
    });
  }

  remove() {
    if ((this.state.cont > 0)) {
      this.setState({
        cont: this.state.cont - 1,
      });
    }
  }

  render() {
    return (
      <View style={styles.container}>

      <Text style={styles.titulo}>Contador de Pessoas</Text>
      <Text style={styles.conta}>{this.state.cont}</Text>

        <Pressable onPress={() => this.add()} style={styles.mais}> 
        <Text style={styles.texto}>+</Text>
        </Pressable>

        <Pressable onPress={() => this.remove()} style={styles.menos}> 
        <Text style={styles.texto}>-</Text>
        </Pressable>

      </View>
    );
  }
}

export default App;
