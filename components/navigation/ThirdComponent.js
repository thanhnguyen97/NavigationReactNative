import React, { Component } from 'react';
import { View, Button, Text, ScrollView, FlatList, SectionList , StyleSheet} from 'react-native';
// import Button from 'react-native-button';

export default class ThirdComponent extends Component{
    render() { 
        return (
           <View style={styles.container}>
                <Text style={styles.text}>
                    This is main screen
                </Text>
            </View> 
        )
    }
}
const styles = StyleSheet.create(
    {
        container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'tomato'}
    },
    {
        text: { fontWeight: 'bold', fontSize: 20, color: 'white' }
    }
)