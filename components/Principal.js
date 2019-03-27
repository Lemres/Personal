import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import ListView from 'react-native';


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