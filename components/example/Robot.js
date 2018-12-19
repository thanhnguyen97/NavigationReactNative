import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Robot extends Component {
    render () {
        const url={ uri: "https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png"};
            // url ="thanh";
        return (
            <Image source= {url}
                   style={{ width: 200, height: 200 }}
            
            ></Image>
        );
    }
}