import React, { Component } from 'react';
import {  View, Text } from 'react-native';

export default class alignItems extends Component {
    render() { 
        return (
            <View style={{  flex: 1 , 
                            flexDirection: 'column',
                            backgroundColor: 'purple',
                            
                            justifyContent: 'space-between',
                            alignItems: 'stretch',
                            }}>
                <Text style={{backgroundColor: 'red' }}></Text>
                <Text style={{backgroundColor: 'yellow' , height: 100, }}></Text>
                <Text style={{backgroundColor: 'white' , height: 100, width: 100}}></Text>
            </View>
        );
    }
}