import * as React from 'react';
import { View, Text, TextInput } from 'react-native';

//image import
import BowlingImage from '../Image/BowlingImage.png';

function FeedScreen() {
    return (
        <View>
            <Text>FeedScreen</Text>
            <img src={BowlingImage}/>
        </View>
    );
}

export default FeedScreen;