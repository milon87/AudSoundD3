import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import {Header} from "react-native-elements";


export default class SongDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<View style={styles.container}>
            <Header
                placement='left'
                leftComponent={{icon: 'arrow-back', color: 'black'}}
                backgroundColor='#fbf1dc'
                centerComponent={{text: 'More', style: {color: 'black'}}}/>

        </View>)
    }


}
const styles = StyleSheet.create({
    container: {}
});