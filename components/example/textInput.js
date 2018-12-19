import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Keyboard} from 'react-native';

export default class textInput extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please enter email',
            typedPassWord: '',
            typedDisrection: ''
        }
    }
    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', ()=>{
            this.setState(() => { 
                return {typedText: 'keyboard is show'}
            })
        })
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', ()=>{
            this.setState(() => { 
                return {typedText: 'keyboard is hide'}
            })
        })
    }
    componentWillUnmount() { 
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }
    _onPressButtom= () => {
        alert("hello baby")
    }
    render() { 
        return(
            <View style={styles.viewContent}>
                <Image source= {{ uri: "https://cdn-images-1.medium.com/max/1200/1*KANHihva9OdXx2-V5EDn3g.png"}}
                        style={styles.image}
                ></Image>
                {/* <Text style={{backgroundColor: 'red', height: 100 }}></Text>
                <Text style={{backgroundColor: 'yellow' , height: 100, }}></Text>
                <Text style={{backgroundColor: 'green' , height: 100,width: 50}}></Text> */}
                
                <TextInput  style={ styles.container } 
                            keyboardType='email-address'
                            placeholder='enter your email'
                            placeholderTextColor='red'

                            onChangeText={
                                (thanh) => {
                                    this.setState((previousState) => {
                                        return {
                                            typedText: thanh
                                        } 
                                    });
                                }
                            }
                />
                <Text>{this.state.typedText}</Text>
                <TextInput style={ styles.container}
                    placeholder='enter your password'
                    keyboardType='default'
                    secureTextEntry={true}

                    onChangeText={
                        (text)=> {
                            this.setState(()=>{
                                return {
                                    typedPassWord: text
                                }
                            })
                        }
                    }
                >
                </TextInput>
                <Text style={styles.textShow}>{this.state.typedPassWord}</Text>
                <TextInput style={ styles.textInputMultiline}
                    placeholder='enter your disrection'
                    multiline={true}
                    borderBottomColor='green'
                    borderBottomWidth={3}
                    borderLeftColor='red'
                    borderLeftWidth={4}
                    borderTopColor='yellow'
                    borderTopWidth={5}
                    borderRightColor='red'
                    borderTopWidth={5}
                    editable={true}// default is true 
                    returnKeyType='done'
                    onSubmitEditing={Keyboard.dismiss}
                    onChangeText={
                        (text)=> {
                            this.setState(()=>{
                                return {
                                    typedDisrection: text
                                }
                            })
                        }
                    }
                >
                </TextInput>
                <View style={{backgroundColor: 'red', borderRadius: 10, shadowRadius: 20, shadowOpacity: 0 , width: 80, justifyContent: 'center', marginRight:40, alignItems: 'center' }}>
                <Button
                    onPress={this._onPressButtom}
                    title="Learn More"
                    color="#red"
                    // backgroundColor='red'
                    accessibilityLabel="Learn more about this purple button"
                    />
                </View>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: { 
        margin: 10,
        borderColor: 'gray',
        borderWidth: 2,
        padding: 5,
    },
    textInputMultiline: {
        margin: 10,
        height: 100,
        borderColor: 'gray',
        borderWidth: 2,
        padding: 5,

    },
    image: {height: 50, width: 50},
    textShow: {
        marginLeft: 20
    },
    viewContent: {
        backgroundColor: 'purple',
        flex: 1,
        // flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center'


    }

});