import React, { Component } from 'react';
// import Button from 'react-native-button';
import {
    Text, View, Image, TouchableHighlight
} from 'react-native';

export default class HeaderComponent extends Component {
    render() {
        return (<View style={{
            height: 90,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center'
        }}>
            <TouchableHighlight style={{ marginLeft: 10, marginTop: 20 }}
                onPress={() => {
                    const { navigate } = this.props.navigation;
                    navigate('DrawerOpen');
                }}>
                <Image
                    style={{ width: 32, height: 32 }}
                    source={require('../../icons/menu_icon.png')}
                />
            </TouchableHighlight>
        </View>);
    }
}