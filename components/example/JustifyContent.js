import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class JustifyContent extends Component { 
    render() { 
        return (
            <View style={styles.container}>
                <View style={styles.Text1}></View>
                <View style={styles.Text2}></View>
                <View style={styles.Text3}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        flexDirection:'column',
        // justifyContent: 'flex-start',
        // justifyContent: 'space-around',
        justifyContent: 'space-evenly',
        backgroundColor: 'purple',
    },
    Text1: {
        backgroundColor: 'red',
        height: 100,
        width: 100
    },
    Text2: {
        backgroundColor: 'green',
        height: 100,
        width: 100
    },
    Text3: {
        backgroundColor: 'white',
        height: 100,
        width: 100
    }
});