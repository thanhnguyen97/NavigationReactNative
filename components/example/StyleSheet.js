import React, { Component } from 'react';
import { Image, View ,StyleSheet, Text} from 'react-native';

export default class StyleSheet1 extends Component { 
    render() { 
        return (
            <View> 
                <Text style ={styles.container}>hello baby</Text>
                <Text style ={styles.firstLineStyle}>my name is thanh</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: 
        {
            margin : 5,
            color : 'green'
        },
    firstLineStyle: {
        backgroundColor: 'red'
    }

});