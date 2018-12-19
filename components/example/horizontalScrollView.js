import React, { Component } from 'react';
import { View, ScrollView, Text, Dimensions} from 'react-native';

export default class horizontalScrollView extends Component { 
    render() { 
        let screenWidth = Dimensions.get('window').width;
        return(
            <ScrollView horizontal={true}
                        pagingEnabled={true}
                        showsHorizontalScrollIndicator={true}
                        onMomentumScrollBegin={()=>{
                            alert('scrolling')
                        }}
                        
            >
                <View style={{backgroundColor: 'purple', width: screenWidth, textAlign:'center', padding:10}}>
                    <Text>Screen one</Text>
                </View>
                <View style={{backgroundColor: 'green', width: screenWidth, textAlign:'center', padding:10}}>
                    <Text>Screen two</Text>
                </View>
                <View style={{backgroundColor: 'red', width: screenWidth, textAlign:'center', padding:10}}>
                    <Text>Screen two</Text>
                </View>
            </ScrollView>
        );
    }
}   