import React from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';


export const Item = ({label, imageURl}) => {


    return (<View style={style.card}>
         <Image
            style={{borderRadius: 25, width: 60, height: 60}}
            source={imageURl}/>
        <Text style={{fontSize: 12, color: 'black', paddingTop: 10}}>{label}</Text>

    </View>)
};

const style = StyleSheet.create({
    card: {
        padding: 10,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',

    }
});
