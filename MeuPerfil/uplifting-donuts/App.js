import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Linking } from 'react-native';

class App extends Component {
  render() {
    let img = 'https://avatars.githubusercontent.com/u/58446267?v=4';

    return (
      <View style={{ flex: 1 }}>
        <Image
          source={{ uri: img }}
          style={{
            width: 300,
            height: 300,
            alignSelf: 'center',
            marginTop: 50,
            marginBottom: 30,
          }}
        />

        <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
          Dados Pessoais:
        </Text>
        <Text style={{ marginLeft: 20 }}>
          Me chamo Maria Luiza, tenho 21 anos e moro em Praia Grande.
        </Text>
        <Text> </Text>

        <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>Formação:</Text>
        <Text style={{ marginLeft: 20 }}>
          Análise e Desenvolvimento de Sistemas - FATEC Praia Grande
        </Text>
        <Text style={{ marginLeft: 20 }}>
          Contabilidade - ETEC Praia Grande
        </Text>
        <Text> </Text>

        <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
          Experiências:
        </Text>
        <Text style={{ marginLeft: 20 }}>
          Analista de Engenharia Junior - Itaú Unibanco
        </Text>
        <Text style={{ marginLeft: 20 }}>Estagiária - REDE (Itaú)</Text>
        <Text> </Text>

        <Text style={{ fontWeight: 'bold', marginLeft: 20 }}>
          Projetos:
        </Text>
        <Text style={{ marginLeft: 20 }} onPress={() => Linking.openURL('https://github.com/IMaluz/CadastroDeClientes')}>
          Site para cadastro de contatos 
        </Text>
        <Text style={{ marginLeft: 20 }} onPress={() => Linking.openURL('https://github.com/IMaluz/CadastroPedidos')}>
           API para cadastro e controle de pedidos
        </Text>
        <Text style={{ marginLeft: 20 }} onPress={() => Linking.openURL('https://imaluz.github.io/GOtech/')}>
           FrontEnd de uma página 
        </Text>
        <Text> </Text>
      </View>
    );
  }
}

export default App;
