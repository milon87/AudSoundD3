import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import Slider from "react-native-slider";
import {Header, Icon} from "react-native-elements";
import Sound from 'react-native-sound';


export default class SongDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seekBar: null,
            status: false,
            currentTime: 0
        }


        const url = 'http://dev.jetarizona.org/Audio/LearningSessionVishnuSahasranamam/008-SVSNStotram-Eeshanaha.mp3';

    }


    render() {


        let playButton = this.state.status ? require('../assets/stop.png') : require('../assets/play.png');

        return (<View style={styles.container}>
            <Header
                placement='left'
                leftComponent={<Icon
                    onPress={() => {
                        this.props.navigation.pop()
                    }}
                    color='black'
                    name='arrow-back'/>}
                backgroundColor='#fbf1dc'
                centerComponent={{text: 'More', style: {color: 'black'}}}
            />

            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.stateChange}>
                    <Image style={{width: 40, height: 40}}
                           source={playButton}/>
                </TouchableOpacity>

                <View style={{flex: 1, margin: 10}}>
                    <Slider
                        value={.6}
                        onValueChange={(value) => console.log(value)}/>
                </View>
            </View>

            <Image style={{resizeMode: 'stretch', margin: 16, width: window.width, height: 200,}}
                   source={require('../assets/im1.jpg')}/>

        </View>)
    }

    stateChange = () => {
        // Play the sound with an onEnd callback
        /* Sound.setCategory('Playback', true); // true = mixWithOthers
         const whoosh = new Sound('frog.wav', (error) => {
             if (error) {
                 console.log('failed to load the sound', error);
                 return;
             }
             // loaded successfully
             console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
         });

         whoosh.play((success) => {
             if (success) {
                 console.log('successfully finished playing');
             } else {
                 console.log('playback failed due to audio decoding errors');
                 // reset the player to its uninitialized state (android only)
                 // this is the only option to recover after an error occured and use the player again
                 whoosh.reset();
             }
         });*/
        let song = new Sound('https://raw.githubusercontent.com/zmxv/react-native-sound-demo/master/advertising.mp3', (error) => {
            if (error) {
                console.log(error)
            }
            else {
                song.play((success) => {
                    if (!success) {
                        console.log('ok')

                    } else {
                        console.log('ok');
                    }
                });
            }
        });

    }


}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center'
    }
});