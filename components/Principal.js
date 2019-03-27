import React from "react";
import { TextInput, StyleSheet, Text, View } from 'react-native';


const Ingreso1 = 'null';
const Ingreso2 = 'null';


export default class App extends React.Component {
  _renderTitle() {
    return(
      <View style={styles.header}>
        <Text style={styles.title}>Calculadora</Text>
      </View>
    );
  }

  _renderButtons() {
    return(
      <View style={styles.buttonWrapper}>
        <TouchableHighlight underlayColor='777' onPress={this.handleLapReset.bind(this)} style={styles.button}>
          <Text>Borrar</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='777' onPress={this.handleLapReset.bind(this)} style={styles.button}>
          <Text>Calcular</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _renderInput(){
    return(
      <View>
        <Text>Ingreso Altura</Text>
        <TextInput
        secureTextEntry
        style={{
          height: 40,
          borderWidth: 1
        }}

        onChangeText={(Ingreso1) => this.setState({Ingreso1})} 
          value={this.state.Ingreso1}
        />

        <Text>Ingreso Peso</Text>
        <TextInput
        secureTextEntry
        style={{
          height: 40,
          borderWidth: 1
        }}

        onChangeText={(Ingreso2) => this.setState({Ingreso2})} 
          value={this.state.Ingreso2}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {this._renderTitle()}
        </View>
        <View>
          {this._renderButtons()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
        borderBottomWidth: 0.5,
        paddingTop:20,
        paddingBottom: 10,
        backgroundColor: '#F9F9F9'
    },
    title: {
      alignSelf: 'center',
      fontWeight: '600',
    },
    top: {
      flex: 1,
    },
    bottom: {
      flex: 2,
      backgroundColor: 'F0EFF5'
    },

    buttonWrapper:{
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingTop: 15,
      paddingBottom: 30,

    },

    button: {
      height: 80,
      width: 80,
      borderRadius: 40,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center'
    }
  });