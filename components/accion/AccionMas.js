import React, { Component } from "react";

export default class onPressPlus extends Component {
    onPressPlus() {
        const { number } = this.state;
        const plusNumber = number + 1;
    
        if (number == this.props.max) {
          return;
        }
    
        return this.setState({ number: plusNumber }, () =>
          this.props.onChange(plusNumber, "+")
        );
      }
}
