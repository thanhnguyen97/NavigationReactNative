import { AppRegistry } from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

import HomeComponent from './components/tabBarNavigation/HomeComponent';
import InfoComponent from './components/tabBarNavigation/InfoComponent';
import SettingsComponent from './components/tabBarNavigation/SettingsComponent';
import CloudComponent from './components/tabBarNavigation/CloudComponent';
//Screen names
import { Home, Info, Settings, Cloud } from './screenNames';

let routeConfigs = createBottomTabNavigator({
    Home: {
        screen: HomeComponent,
    },
    Info: {
        screen: InfoComponent,
    },
    Settings: {
        screen: SettingsComponent,
    },
    Cloud: {
        screen: CloudComponent,
    },
});
let tabBarOptions  = {    
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
        activeTintColor: 'blue',
        labelStyle: {
            fontSize: 13,
        },
        style: {
            backgroundColor: 'lightgray',
            padding: -10
        },    
        // showLabel: false    
    },    
    order: [Settings, Home, Cloud, Info],
};
const App = createAppContainer(routeConfigs, tabBarOptions);
AppRegistry.registerComponent('thanhnguyen', () => App);

// import React, { Component } from 'react';
// import { AppRegistry, View, Text } from 'react-native';
// import { Provider } from "react-redux";
// // import App from './App';
// import store from "./store";
// import ContactForm from './components/reduxForm/ContactForm';

// const handleSubmit = values => {    
//     alert(`submitting form with values123 = ${values}`);
// };

// export default class App extends Component {
//     render() {
//         return (
//             <Provider store={store}>
//                 <ContactForm handleSubmit={handleSubmit}/>
//             </Provider>
//         );
//     }
// };
// AppRegistry.registerComponent('thanhnguyen', () => App);


// import { AppRegistry, Dimensions } from 'react-native';
// import { createDrawerNavigator, createAppContainer  } from 'react-navigation';
// // import App from './App';
// //Components
// import HomeComponent from './components/drawerNavigator/HomeComponent';
// import InfoComponent from './components/drawerNavigator/InfoComponent';
// import SettingsComponent from './components/drawerNavigator/SettingsComponent';
// import CloudComponent from './components/drawerNavigator/CloudComponent';
// //Screen names
// import { Home, Info, Settings, Cloud } from './screenNames';
// //Screen size
// var {height, width} = Dimensions.get('window');

// let routeConfigs = createDrawerNavigator({
//     Home: {
//         path: '/',
//         screen: HomeComponent,
//     },
//     Info: {
//         path: '/info',
//         screen: InfoComponent,
//     },
//     Settings: {
//         screen: SettingsComponent,
//     },
//     Cloud: {
//         screen: CloudComponent,
//     },
// });
// let drawerNavigatorConfig = {    
//     initialRouteName: Settings,
//     drawerWidth: width / 2,
//     drawerPosition: 'left',
//     drawerOpenRoute: 'DrawerOpen',
//     // drawerCloseRoute: 'DrawerClose',
//     // drawerToggleRoute: 'DrawerToggle',  
//     // drawerBackgroundColor: 'orange',
//     contentOptions: {
//         activeTintColor: 'red',
//     },
//     order: [Info, Settings, Cloud, Home]
// };
// const App = createAppContainer(routeConfigs, drawerNavigatorConfig);
// AppRegistry.registerComponent('thanhnguyen', () => App);


// import { AppRegistry } from 'react-native';
// import { createStackNavigator , createAppContainer} from 'react-navigation';
// import MainComponent from './components/navigation/MainComponent';
// import DetailComponent from './components/navigation/DetailComponent';
// import ThirdComponent from './components/navigation/ThirdComponent';
// import { MainScreen, DetailScreen, ThirdScreen } from './components/navigation/ScreenNames';
// const RootStack = createStackNavigator({
//         MainScreen: {
//             screen: MainComponent,
//         },
//         DetailScreen: {
//             screen: DetailComponent,
//         },
//         ThirdScreen: {
//             screen: ThirdComponent,
//             navigationOptions: {
//                 headerTitle: 'Third'
//             },
//         },
        
// })
// const App = createAppContainer(RootStack);

// AppRegistry.registerComponent('thanhnguyen', () => App)


// /** @format */
// import React, { Component } from 'react';
// import {AppRegistry, View ,StyleSheet, Text} from 'react-native';
// import Robot from './components/Robot';
// import MultipleGreeting from './components/MultipleGreeting';
// import Blink from './components/Blink';
// import StyleSheet1 from './components/StyleSheet';
// import FixedDimension from './components/FixedDimension';
// import FlexDimension from './components/FlexDimension';
// import JustifyContent from './components/JustifyContent';
// import alignItems from './components/alignItems';
// import textInput from './components/textInput';
// import ScrollView1 from './components/ScrollView';
// import horizontalScrollView from './components/horizontalScrollView';




// AppRegistry.registerComponent('thanhnguyen', () => horizontalScrollView);
