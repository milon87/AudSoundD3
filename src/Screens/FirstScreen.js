import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import GridView from 'react-native-super-grid';
import {Item} from "../../HomeListItem";
import {Header, Icon} from "react-native-elements";


export default class FirstScreen extends Component {
    static navigationOptions = {
        title: 'More',
    };
    constructor(props) {
        super(props)
    }

    render() {
        const items = [
            {name: 'HH Schedule', image: require('../assets/if_Calendar_Time_37787_128by1286.png')},
            {name: 'Calendar', image: require('../assets/if_calendar_1646007.png')},
            {name: 'FAQ', image: require('../assets/if_faw_blue_425645_128by128.png')},
            {name: 'Share', image: require('../assets/if_share_386106.png')},
            {name: 'Nakshatra', image: require('../assets/if_star_rate_1197988.png')},
            {name: 'Camera', image: require('../assets/if_camera_cam_video_round_1600863.png')},
            {name: 'Short Speech', image: require('../assets/if_preferences_desktop_text_to_speech_24267.png')},
            {name: 'Quote', image: require('../assets/if_quote.png')},
            {name: 'Book', image: require('../assets/if_Book_books_education_book.png')},
            {name: 'Photo', image: require('../assets/if_photo_image_1055042.png')},
            {name: 'Music', image: require('../assets/if_music_173060.png')},
            {name: 'Learning', image: require('../assets/if_book_learning113_394914_256by256.png')},
            {name: 'Download', image: require('../assets/if_download.png')},
            {name: 'Help', image: require('../assets/if_82_644461_faq_128by128.png')},
            {name: 'HH Schedule', image: require('../assets/if_Calendar_Time_37787_128by1286.png')},
            {name: 'Calendar', image: require('../assets/if_calendar_1646007.png')},
            {name: 'FAQ', image: require('../assets/if_faw_blue_425645_128by128.png')},
            {name: 'Share', image: require('../assets/if_share_386106.png')},
            {name: 'Nakshatra', image: require('../assets/if_star_rate_1197988.png')},
            {name: 'Camera', image: require('../assets/if_camera_cam_video_round_1600863.png')},
            {name: 'Short Speech', image: require('../assets/if_preferences_desktop_text_to_speech_24267.png')},
            {name: 'Quote', image: require('../assets/if_quote.png')},
            {name: 'Book', image: require('../assets/if_Book_books_education_book.png')},
            {name: 'Photo', image: require('../assets/if_photo_image_1055042.png')},
            {name: 'Music', image: require('../assets/if_music_173060.png')},
            {name: 'Learning', image: require('../assets/if_book_learning113_394914_256by256.png')},
            {name: 'Download', image: require('../assets/if_download.png')},
            {name: 'Help', image: require('../assets/if_82_644461_faq_128by128.png')},
            {name: 'HH Schedule', image: require('../assets/if_Calendar_Time_37787_128by1286.png')},
            {name: 'Calendar', image: require('../assets/if_calendar_1646007.png')},
            {name: 'FAQ', image: require('../assets/if_faw_blue_425645_128by128.png')},
            {name: 'Share', image: require('../assets/if_share_386106.png')},
            {name: 'Nakshatra', image: require('../assets/if_star_rate_1197988.png')},
            {name: 'Camera', image: require('../assets/if_camera_cam_video_round_1600863.png')},
            {name: 'Short Speech', image: require('../assets/if_preferences_desktop_text_to_speech_24267.png')},
            {name: 'Quote', image: require('../assets/if_quote.png')},
            {name: 'Book', image: require('../assets/if_Book_books_education_book.png')},
            {name: 'Photo', image: require('../assets/if_photo_image_1055042.png')},
            {name: 'Music', image: require('../assets/if_music_173060.png')},
            {name: 'Learning', image: require('../assets/if_book_learning113_394914_256by256.png')},
            {name: 'Download', image: require('../assets/if_download.png')},
            {name: 'Help', image: require('../assets/if_82_644461_faq_128by128.png')},

        ];

        return (
            <View>
               {/* <Header
                    backgroundColor='#fbf1dc'
                    centerComponent={{text: 'More', style: {color: 'black'}}}/>
*/}

                <GridView
                    itemDimension={70}
                    items={items}
                    style={styles.gridView}
                    renderItem={item => (
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('SecondScreen')
                        }}>
                            <Item label={item.name} imageURl={item.image}/>
                        </TouchableOpacity>
                    )}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        backgroundColor: '#caad7c',
    },
});


