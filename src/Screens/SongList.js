import React, {Component} from 'react';
import {View, Text, Platform, StyleSheet, Alert, FlatList, TouchableOpacity} from 'react-native';
import Row from "../../SongItem";
import {Header, Icon, SearchBar} from 'react-native-elements'

const list = [
    {
        name: 'Achaya Welcome song',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        name: 'Chris Jacksons',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    },
    {
        name: 'Achaya Welcome song',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        name: 'Chris Jacksons',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    },
    {
        name: 'Achaya Welcome song',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        name: 'Chris Jacksons',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    },
    {
        name: 'Achaya Welcome song',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        name: 'Chris Jacksons',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    },
    {
        name: 'Achaya Welcome song',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    },
    {
        name: 'Chris Jacksons',
        avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    },
];

export default class SongList extends Component {

    static navigationOptions = {
        title: 'List',
    };
    constructor(props) {
        super(props);

        this.state = {
            arr: list
        }

    }

    render() {


        return (
            <View style={{flex: 1}}>
               {/* <Header
                    placement='left'
                    leftComponent={<Icon
                        onPress={() => {
                            this.props.navigation.pop()
                        }}
                        color='black'
                        name='arrow-back'/>}
                    backgroundColor='#fbf1dc'
                    centerComponent={{text: 'More', style: {color: 'black'}}}
                />*/}

                <SearchBar
                    round
                    ref={search => this.search = search}
                    lightTheme
                    clearIcon={{color: 'black'}}
                    searchIcon={{size: 24}}
                    onChangeText={this.change}
                    onClear={this.clear}
                    placeholder='Search'/>

                <FlatList
                    data={this.state.arr}
                    renderItem={({item}) => <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ThirdScreen')}>
                        <Row title={item.name}/>
                    </TouchableOpacity>}
                />
            </View>)
    }

    clear = () => {

        console.log('clear')
        this.search.clear();
        this.setState(previousState => {
            return {arr: list};
        })
    };

    change = (text) => {
        console.log(text)
        let newList = list.filter((x) => x.name.includes(text))
        this.setState(previousState => {
            return {arr: newList};
        })
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        justifyContent: 'center'
    }, separator: {
        backgroundColor: '#8E8E8E',
    },
});