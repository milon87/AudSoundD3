import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import Home from './src/Screens/FirstScreen';
import {createBottomTabNavigator} from 'react-navigation'
import SongDetail from "./src/Screens/SongDetail";
import SampleScreen from "./src/Screens/SampleScreen";
import TabStack from "./src/Screens/TabStack";

const Nav = createBottomTabNavigator({
    Home: SampleScreen,
    Stokas: SampleScreen,
    Discourse: SampleScreen,
    Video: SampleScreen,
    More: TabStack
}, {
    initialRouteName: 'More',
    navigationOptions: ({navigation}) => ({
        tabBarOptions: {
            tabStyle: {
                backgroundColor: '#fbf1dc'
            }
        },
        tabBarIcon: ({focused, tintColor}) => {
            const {routeName} = navigation.state;

            if (routeName === 'Home') {
                return <Image
                    style={{borderRadius: 25, width: 35, height: 35}}
                    source={require('./src/assets/ic_action_home.png')}/>;

            } else if (routeName === 'Stokas') {
                return <Image
                    style={{borderRadius: 25, width: 35, height: 35}}
                    source={require('./src/assets/ic_action_videocam.png')}/>;
            } else if (routeName === 'Discourse') {
                return <Image
                    style={{borderRadius: 25, width: 35, height: 35}}
                    source={require('./src/assets/ic_action_audiotrack.png')}/>;
            } else if (routeName === 'More') {
                return <Image
                    style={{borderRadius: 25, width: 35, height: 35}}
                    source={require('./src/assets/ic_action_more_horiz.png')}/>;
            } else if (routeName === 'Video') {
                return <Image
                    style={{borderRadius: 25, width: 35, height: 35}}
                    source={require('./src/assets/ic_action_videocam.png')}/>;
            }


        },
    }),
    tabBarOptions: {
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
    },
});

export default class AppTabBased extends Component {
    render() {
        return (
            <Nav/>
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
