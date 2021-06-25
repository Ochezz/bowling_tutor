import * as React from 'react';
import { View, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//css import
import '../CSS/FeedScreen.css'

//image import
import BowlingImage from '../Image/BowlingImage.png';
import LogoImage from '../Image/logo.png';

function FeedScreen() {
    return (
        <View>
            {/* <Text>FeedScreen</Text> */}
            <div id='logo-div'>
                <img src={LogoImage}/>
            </div>
            <div id='date-div'>2021 / 06 / 25</div>
            <div id='video-div'>
                <div id='video-preImg-div'>
                    <Icon id='aaa' name='chevron-left' size={20}/>
                    <img id='preImg' src={BowlingImage}/>
                </div>
                <div id='video-nowImg-div'>
                    <img id='nowImg' src={BowlingImage}/>
                    <Icon name='dots-horizontal-circle' size={40} color={"#D0D0D0"}/>
                </div>
                <div id='video-nextImg-div'>
                    <img id='nextImg' src={BowlingImage}/>
                    <Icon name="chevron-right" size={20}/>
                </div>
            </div>
            <div id='info-div'>
                <div>
                    <Icon name='map-marker' size={20}/>
                    <span>IKEBUKURO ROUND1</span>
                </div>
                <div>
                    <span>ABCDEFEG</span>
                </div>
            </div>
            <div id='record-div'>
                <button id='record-btn'>
                    <Icon name="camera" color='white' size={40}/>
                </button>
            </div>
        </View>
    );
}

export default FeedScreen;