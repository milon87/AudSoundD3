import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        flex: .9,
        marginLeft: 12,
        fontSize: 16,
    },
    photo: {
        flex: .1,
        height: 40,
        width: 40,
    },
});

const Row = (props) => (

        <View style={{flexDirection: 'column'}}>
            <View style={styles.container}>
                <Image source={require('./src/assets/song.png')} style={styles.photo}/>
                <Text style={styles.text}>
                    {props.title}
                </Text>
                <Image source={require('./src/assets/baseline_keyboard_arrow_right_black_18dp.png')} style={{
                    width: 24, height: 24, flex: .1,
                }}/>
            </View>
            <View style={{backgroundColor: 'grey', height: .5}}/>
        </View>
);

export default Row;