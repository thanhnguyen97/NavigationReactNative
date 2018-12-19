import React, { Component} from 'react';
import { View, Text, ScrollView, Image, TextInput, StyleSheet, Dimensions} from 'react-native';

export default class ScrollView1 extends Component { 
    render() { 
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView style ={ styles.ScrollViewCss}>
                <View style={styles.container}>
                    <Image  style={{width: screenWidth, height: screenWidth * 182 / 278}}
                            source={ require('../images/image_computer.jpg')}>

                    </Image>
                    <Text style={styles.textCss}>'image so beatiful'</Text>
                </View>
                
                <TextInput style={styles.inputCss} placeholder='enter your email'>

                </TextInput>
                <Image  style={{width: screenWidth, height: screenWidth * 182 / 278}}
                            source={ require('../images/image_computer.jpg')}>

                    </Image>
                    <Image  style={{width: screenWidth, height: screenWidth * 182 / 278}}
                            source={ require('../images/image_computer.jpg')}>

                    </Image>
                    <Image  style={{width: screenWidth, height: screenWidth * 182 / 278}}
                            source={ require('../images/image_computer.jpg')}>

                    </Image>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create(
    {   textCss: {
        fontSize: 20,
        color: 'black',
        backgroundColor:'green',
        textAlign: 'center',
        padding:10
    },
        container: {
            width: 400,
            height: 300
        },
        ScrollViewCss: {
            // flex: 1,
            // justifyContent: 'center',
            // alignItems: 'center'
        },
        inputCss: {
            height: 50,
            // width: this.screenWidth,
            margin: 10,
            borderColor: 'gray',
            borderWidth: 2,
            padding: 5,
            marginTop: 0
        }

    }
)
