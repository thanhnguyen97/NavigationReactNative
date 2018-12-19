import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimension extends Component { 
    render() { 
        return ( 
            <View style={ {flex: 1} }>
                <View style={{height: 100, backgroundColor: 'yellow'}}></View>
                <View style={{flex: 50, backgroundColor: 'green'}}></View>
                <View style={{flex: 50, backgroundColor: 'red'}}></View>
            </View> 
        )
    }
}