import React, { Component } from 'react';
import { Info } from '../../screenNames';
import { View, Button, Text, Image} from 'react-native';
// import Button from 'react-native-button';
const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {    
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';   
        let tabBarIcon = () => (
            <Image
                source={require('../../icons/home_icon.png')}
                style={{ width: 26, height: 26, tintColor: backgroundColor }}
            />
        );    
        return { tabBarLabel, tabBarIcon };
    }
    render() {        
        return (<View style={{
            flex: 1,
            backgroundColor: backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <Text style={{ fontWeight: 'bold', fontSize: 22, color: 'white' }}>
                This is Home Screen
            </Text>
            <Button
                containerStyle={{ padding: 10, margin: 20, width: 200, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                style={{ fontSize: 18, color: 'white' }}
                onPress={() => {
                    console.log(`this.props.navigation = ${JSON.stringify(this.props.navigation)}`);
                    const { navigate } = this.props.navigation;
                    navigate(Info);
                }}
                title='navigate to detail'
                >
            </Button>
        </View>);
    }
}