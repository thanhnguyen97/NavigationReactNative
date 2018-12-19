import React, { Component } from 'react';
import { Image, View , Text} from 'react-native';

class Thanhnguyen extends Component {
    render()  {
        return (
            <View>
                <Text style={{ marginTop:60 }}>
                    hello { this.props.thanh } this is personal project 
                </Text>
            </View>
        );
    }
}

export default class MultipleGreeting extends Component{
    render() {
        return (
            <View>
                <Image source={{uri:"https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png"}}
                    style={{width: 100, height: 100}}
                ></Image>
                <Thanhnguyen thanh="thanhnguyen"></Thanhnguyen>
                <Thanhnguyen thanh="thanhnhan"></Thanhnguyen>
            </View>

        );
    }
}