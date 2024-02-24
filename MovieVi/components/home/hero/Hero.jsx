import { useState } from "react";

import { 
    Image,
    View,
    TouchableHighlight,
    FlatList
 } from "react-native";

import styles from './hero.style'
import {images, COLORS} from '../../../constants/index'

// image carousel
const imageCarousel = [images.theboyandtheheron,images.hexicoriddor, images.thefrontline]

const Hero = () => {
    return(
        <View style = {styles.container}>
            <FlatList
                data = {imageCarousel}
                renderItem = {
                    ({item}) =>
                    (
                        <TouchableHighlight
                            activeOpacity={0.6}
                            underlayColor= "#DDDDD"
                            onPress={() => {}}
                        >
                            <Image
                            source={item}
                            resizeMode="contain"
                            style = {styles.image}
                            />
                        </TouchableHighlight>
                        
                    )
                }
                horizontal
                showsHorizontalScrollIndicator = {false}
            />
        </View>
    )
}

export default Hero;