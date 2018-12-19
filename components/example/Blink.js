import React, { Component } from 'react';
import { Image, View , Text} from 'react-native';

class Thanh extends Component {
    constructor(props) { 
        super(props);
        this.state = { 
            thanhnguyen: true
        };
        var taskToDo = () => {
            this.setState(nguyen => {
                return {
                    thanhnguyen: !nguyen.thanhnguyen
                }
            });
        };
        const timeOutBlink = 1000;
        setInterval(taskToDo, timeOutBlink);
    };
   render() {

    // let exampleText = this.state.thanhnguyen ? this.props.textName : '';

    if (this.state.thanhnguyen == true){
        exampleText = this.props.textName
    }else { 
        exampleText = ''
    }
        return (
            <Text>
                {exampleText}                
            </Text>
        )
    }
}

export default class Blink extends Component {
    render() { 
        return (
            <View> 
                <Thanh textName ='how are you today'></Thanh>
            </View>
        )
        
    }

}