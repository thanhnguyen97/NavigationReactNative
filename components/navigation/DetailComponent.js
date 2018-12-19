import React, { Component } from 'react';
import { View, Button, Text, ScrollView, FlatList, SectionList, StyleSheet } from 'react-native';
import {ThirdScreen} from './ScreenNames';
// import Button from 'react-native-button';

export default class DetailComponent extends Component{
    static navigationOptions = ({navigation}) => { 
        let headerTitle = 'Detail';
        let headerStyle = { backgroundColor: 'green', borderBottomColor: 'white'};
        let headerTitleStyle = { color: 'yellow'};
        let headerTintColor = "red";

        return { headerTitle, headerStyle, headerTintColor, headerTitleStyle};
    }

    render() { 
        const {navigation} = this.props;
        console.log(`this.props.navigation= ${JSON.stringify(this.props.navigation)}`);
        let paramFromMainScreen = this.props.navigation.state.params;
        return (
           <View style={styles.container}>
                <Text style={styles.text}>
                    This is main screen
                </Text>
                <Text>{paramFromMainScreen.name}</Text>
                <Text>{paramFromMainScreen.age}</Text>
                <Button containerStyle={ {padding: 10, margin: 20, width: 200, height: 50, borderRadius: 10, backgroundColor: 'darkviolet'} }
                style={styles.button}
                onPress={()=> {
                    // this.props.navigate(DetailScreen);
                    navigation.navigate(ThirdScreen);
                }}
                title="navigate to detail"
                ></Button>
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