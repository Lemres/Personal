import React, { Component } from "react";


export default class onPressMinus extends Component {
    render() {
        const { number } = this.state;
        const minusNumber = number - 1;
    
        if (number == this.props.min) {
          return;
        }
    
        return this.setState({ number: minusNumber }, () =>
          this.props.onChange(minusNumber, "-")
        );
      }

}
