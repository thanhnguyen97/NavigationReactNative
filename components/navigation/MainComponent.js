import React, { Component } from 'react';
import { View, Button, Text, ScrollView, FlatList, SectionList , StyleSheet, ActivityIndicator} from 'react-native';
import { DetailScreen, ThirdScreen} from './ScreenNames';
// import Button from 'react-native-button';

export default class MainComponent extends Component{
    static navigationOptions = ({ navigation }) => {
        const { params = {}} = navigation.state;
        let headerTitle = 'Main';
        let headerTitleStyle= { color : 'red', alignSelf: 'center',fontSize: 30, textAlign: 'center',};
        let headerRight = (
            <Button title='save'
                    onPress={() => {
                        params.onSave();
                    }}
            
            ></Button>);
        let headerBackTitle= 'Back';
        return {headerTitle , headerTitleStyle, headerRight, headerBackTitle}
    }
    _onSave() { 
        if(this.props.navigation.state.params.isSaving == true){
            return;
        }
            this.props.navigation.setParams({ isSaving: true });
            
            setInterval(() => {
                this.props.navigation.setParams({isSaving: true});
            }, 3000);
    }
    componentDidMount() { 
        this.props.navigation.setParams({ onSave: this._onSave.bind(this), isSaving: false })
    }

    render() { 
        const {navigation} = this.props;
        let contentSendToDetail = {
            name: 'thanh',
            age: '20'
        };

        // let mainView = (navigation.state.params.isSaving == true) ? <ActivityIndicator/> : 
        // <View style={styles.container}>
        //         <Text style={styles.text}>
        //             This is main screen
        //         </Text>
        //         <Button containerStyle={ {padding: 10, margin: 20, width: 200, height: 50, borderRadius: 10, backgroundColor: 'darkviolet'} }
        //                 style={styles.button}
        //                 onPress={()=> {
        //                     // this.props.navigate(DetailScreen);
        //                      navigation.navigate(DetailScreen, contentSendToDetail);
        //                     }
        //                 }
        //                 title="navigate to detail"
        //         ></Button>
        //         <Button containerStyle={ {padding: 10, margin: 20, width: 200, height: 50, borderRadius: 10, backgroundColor: 'darkviolet'} }
        //                 style={styles.button}
        //                 onPress={()=> {
        //                     // this.props.navigate(DetailScreen);
        //                     navigation.navigate(ThirdScreen);
        //                    }
        //                 }
        //                 title="navigate to third"
        //         ></Button>
        //     </View> 
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    This is main screen
                </Text>
                <Button containerStyle={ {padding: 10, margin: 20, width: 200, height: 50, borderRadius: 10, backgroundColor: 'darkviolet'} }
                        style={styles.button}
                        onPress={()=> {
                            // this.props.navigate(DetailScreen);
                             navigation.navigate(DetailScreen, contentSendToDetail);
                            }
                        }
                        title="navigate to detail"
                ></Button>
                <Button containerStyle={ {padding: 10, margin: 20, width: 200, height: 50, borderRadius: 10, backgroundColor: 'darkviolet'} }
                        style={styles.button}
                        onPress={()=> {
                            // this.props.navigate(DetailScreen);
                            navigation.navigate(ThirdScreen);
                           }
                        }
                        title="navigate to third"
                ></Button>
            </View> 
        );
    }
}
const styles = StyleSheet.create(
    {
        container: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'tomato'}
    },
    {
        text: { fontWeight: 'bold', fontSize: 20, color: 'white' }
    },
    {
        button: {
            color: 'white',
            fontSize: 18,
            margin: 30,
            padding: 10, margin: 20, width: 200, height: 50, borderRadius: 10, backgroundColor: 'green'
        }
    }
)
