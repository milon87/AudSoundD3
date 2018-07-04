import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, Button} from 'react-native';
import Slider from "react-native-slider";
import {Header, Icon} from "react-native-elements";
import Sound from 'react-native-sound';
import RNFetchBlob from 'react-native-fetch-blob'


var sound = null;

export default class SongDetail extends Component {
    static navigationOptions = {
        title: 'Detail',
    };
    constructor(props) {
        super(props);
        this.state = {
            seekBar: 0,
            duration: 0,
            status: false,
            currentTime: 0
        }

    }

    _loadAudio = () => {
        sound = new Sound(
            'https://dev.jetarizona.org/Audio/LearningSessionVishnuSahasranamam/008-SVSNStotram-Eeshanaha.mp3',
            undefined,
            (error) => {
                if (error) {
                    console.log(error);
                } else {


                    sound.play(() => {
                        //this.stopAudio()
                        // sound.release();

                    });

                    this.setState({
                        status: true,
                        duration: sound.getDuration()
                    });

                    setInterval(() => {
                        if (sound !== null)
                            sound.getCurrentTime(seconds => {
                                this.setState({currentTime: seconds})
                            })
                    }, 1000);


                }
            }
        );
    };

    componentDidMount() {

    };


    render() {

        console.log(this.state.currentTime);
        let playButton = this.state.status ? require('../assets/stop.png') : require('../assets/play.png');

        return (<View style={styles.container}>
          {/*  <Header
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

            <View style={{alignItems: 'center', flexDirection: 'row'}}>
                <TouchableOpacity onPress={this.stateChange}>
                    <Image style={{width: 40, height: 40}}
                           source={playButton}/>
                </TouchableOpacity>

                <View style={{flex: 1, margin: 10, flexDirection: 'column'}}>
                    <View style={{justifyContent: 'center'}}>
                        <Text>telgu jivhe keethana</Text>
                    </View>

                    <Slider
                        value={this.state.duration !== 0 ? parseInt(this.state.currentTime) / parseInt(this.state.duration) : 0}
                        onValueChange={(value) => {
                            sound.setCurrentTime(value * this.state.duration)
                            this.setState({
                                currentTime: value * this.state.duration
                            })
                        }}/>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text>{parseInt(this.state.currentTime)}</Text>
                        <Text>{parseInt(this.state.duration)}</Text>

                    </View>
                </View>
            </View>

            <Image style={{resizeMode: 'stretch', margin: 16, width: window.width, height: 200,}}
                   source={require('../assets/im1.jpg')}/>

            <View style={{flexDirection: 'row', margin: 10, alignItems: 'center'}}>
                <Text style={{marginRight: 30}}>Play Type: Stream</Text>

                <Icon
                    name='file-download'
                    type='material'
                    color='black'
                    onPress={this.downloadFile}/>

            </View>

        </View>)
    }

    stateChange = () => {
        !this.state.status ? this._loadAudio() : this.stopAudio()
    };


    stopAudio() {
        sound.stop();
        sound.release();
        sound = null;
        this.setState({
            seekBar: 0,
            duration: 0,
            status: false,
            currentTime: 0,
        })
    }

    downloadFile = () => {
        console.log('Hello')
        RNFetchBlob
            .fetch('GET', 'https://dev.jetarizona.org/Audio/LearningSessionVishnuSahasranamam/008-SVSNStotram-Eeshanaha.mp3')
            .then((res) => {
                // the temp file path
                alert('File is saved');
                console.log('The file saved to ', res.path())
            })
    }
}

const
    styles = StyleSheet.create({
        container: {
            justifyContent: 'center'
        }
    });