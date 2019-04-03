import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";


export default class Botonmas extends Component {

renderMinusButton() {
    const {
      min,
      touchableDisabledColor,
      touchableColor,
      minusIcon
    } = this.props;
    const isMinusDisabled = min == this.state.number;
    const buttonStyle = {
      borderColor: isMinusDisabled ? touchableDisabledColor : touchableColor
    };

    return (
      <TouchableOpacity
        style={[Styles.touchable, buttonStyle]}
        onPress={this.onPressMinus}
        activeOpacity={isMinusDisabled ? 0.9 : 0.2}
      >
        {this.props.minusIcon ? (
          this.props.minusIcon(
            isMinusDisabled,
            touchableDisabledColor,
            touchableColor
          )
        ) : (
          <Text
            style={[
              Styles.iconText,
              {
                color: isMinusDisabled ? touchableDisabledColor : touchableColor
              }
            ]}
          >
            -
          </Text>
        )}
      </TouchableOpacity>
    );
  }
}