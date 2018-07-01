import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import SongDetail from "./SongDetail";
import FirstScreen from "./FirstScreen";
import SongList from "./SongList";

const Navigation = createStackNavigator({
    FirstScreen: {screen: FirstScreen,},
    SecondScreen: {screen: SongList},
    ThirdScreen: {screen: SongDetail}
}, {
    initialRouteName: 'FirstScreen',
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

export default class TabStack extends Component {
    render() {
        return (
            <Navigation/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
