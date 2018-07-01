import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Home from './src/Screens/FirstScreen';
import {createStackNavigator} from 'react-navigation'
import SongDetail from "./src/Screens/SongDetail";

const Navigation = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'More'
        }
    },
    SongDetail: {screen: SongDetail}
}, {
    initialRouteName: 'Home',
    /* The header config from FirstScreen is now here */
    navigationOptions: {
        header: null,
        headerStyle: {
            backgroundColor: '#fbf1dc',
        },
        headerTintColor: '#000000',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },
});

export default class App extends Component {
    render() {
        return (
            <Navigation/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
