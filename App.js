import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import onPressPlus from "./components/accion/AccionMas"
import onPressMinus from "./components/accion/AccionMinus"
import Botonmenos from "./components/buttons/Botonmenos"
import Botonmas from "./components/buttons/Botonmas"

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: this.props.start
    };

  
    var presionMas= onPressMinus;
    var presionMenos= onPressPlus;
    presionMas = presionMas.bind(this);
    presionMenos = presionMenos.bind(this);
  }


  
  
  render() {
    const { number } = this.state;
    const { mas } = Botonmas;
    const { menos } = Botonmenos;

    return (
      <View style={Styles.container}>
        <View>{mas}</View>
        <View style={Styles.number}>
          <Text style={[Styles.text, { color: this.props.textColor }]}>
            {number}
          </Text>
        <View>{menos}</View>
        </View>  
      </View>
    );
  }
}

const Styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flexDirection: "row"
  },

  text: {
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 15
  },

  iconText: {
    fontSize: 22,
    marginTop: -3
  },

  number: {
    minWidth: 40,
    alignItems: "center",
    justifyContent: "center"
  },

  touchable: {
    width: 35,
    height: 26,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  }
});

Counter.propTypes = {
  start: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onChange: PropTypes.func,

  textColor: PropTypes.string,
  touchableColor: PropTypes.string,
  touchableDisabledColor: PropTypes.string,

  minusIcon: PropTypes.func,
  plusIcon: PropTypes.func
};

Counter.defaultProps = {
  start: 0,
  min: 0,
  max: 10,
  onChange(number, type) {
    // Number, - or +
  },

  textColor: "#196583",
  touchableColor: "#27AAE1",
  touchableDisabledColor: "#B5E9FF",

  minusIcon: null,
  plusIcon: null
};




