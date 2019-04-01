import React from 'react';
import {Button } from 'react-native';

export default class Botones extends React.Component{
    render() {
        return(
            <Button
                onPress={onPressLearnMore}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        );
    }
}