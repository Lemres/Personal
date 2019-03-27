import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import ListView from 'react-native';


let laps = [
  { name: 'Lap 1', value: '00.00.01'},
  { name: 'Lap 2', value: '00.00.02'},
  { name: 'Lap 3', value: '00.00.03'},
  { name: 'Lap 4', value: '00.00.04'},
  { name: 'Lap 5', value: '00.00.05'},
];

let ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
});

class Stopwatch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: ds.cloneWithRows(laps)
    }
  }
}

export default class App extends React.Component {
  _renderTitle() {
    return(
      <View style={styles.header}>
        <Text style={styles.title}>Cronometro</Text>
      </View>
    );
  }
  
  _renderTimers() {
    return(
      <View style={styles.timerWreapper}>
      <View style={styles.timerWrapperInner}>
      <Text style={styles.lapTimer}>00:00.95</Text>
      <Text style={styles.mainTimer}>00:02.95</Text>
      </View>
      </View>
    );
  }

  _renderButtons() {
    return(
      <View style={styles.buttonWrapper}>
        <TouchableHighlight underlayColor='777' onPress={this.handleLapReset.bind(this)} style={styles.button}>
          <Text>Lap</Text>
        </TouchableHighlight>
        <TouchableHighlight underlayColor='777' onPress={this.handleLapReset.bind(this)} style={styles.button}>
          <Text>Start</Text>
        </TouchableHighlight>
      </View>
    );
  }

  _renderLaps(){
    return(
      <View style={styles.lapsWrapper}>
        <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow= {(rowData) => (
          <View style={styles.lapRow}>
            <Text style={styles.lapNumber}>{rowData.name}</Text>
            <Text style={styles.lapTime}>{rowData.value}</Text>
          </View>
        )}
        />
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          {this._renderTitle()}
          {this._renderTimers()}
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
    timerWrapper: {
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      flex: 1,
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
    },

    timerWrapperInner: {
      borderWidth: 0.5,
      alignSelf: 'center',
    },

    mainTimer: {
      fontSize: 60,
      fontWeight: '100',
      borderWidth: 0.5,
      alignSelf: 'center'
    },

    lapTimer: {
      fontSize: 18,
      borderWidth: 0.5,
      alignSelf: 'center'
    }
  });