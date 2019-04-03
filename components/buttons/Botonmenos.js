import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";


export default class Botonmas extends Component {

    renderPlusButton() {
        const {
          max,
          touchableDisabledColor,
          touchableColor,
          plusIcon
        } = this.props;
        const isPlusDisabled = max == this.state.number;
        const buttonStyle = {
          borderColor: isPlusDisabled ? touchableDisabledColor : touchableColor
        };
    
        return (
          <TouchableOpacity
            style={[Styles.touchable, buttonStyle]}
            onPress={this.onPressPlus}
            activeOpacity={isPlusDisabled ? 0.9 : 0.2}
          >
            {this.props.plusIcon ? (
              this.props.plusIcon(
                isPlusDisabled,
                touchableDisabledColor,
                touchableColor
              )
            ) : (
              <Text
                style={[
                  Styles.iconText,
                  {
                    color: isPlusDisabled ? touchableDisabledColor : touchableColor
                  }
                ]}
              >
                +
              </Text>
            )}
          </TouchableOpacity>
        );
      }
    
}