import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

export default class FixedDimension extends Component{
    render() {
        return (
            <View style={ styles.container }> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {width: 100, height: 50, backgroundColor: 'blue'}
});