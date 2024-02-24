import React from "react";
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";

import styles from "./popularmovie.style";
import {COLORS, SIZES } from '../../../constants'
import PopularMovieCard from "../../common/cards/popular/PopularMovieCard";

import useFetch from "../../../hook/useFetch";

const PopularMovie = () =>{
    const router = useRouter();
    
    //loading 
    const {data, isLoading, error} = useFetch()

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Popular Movie</Text>
                <TouchableOpacity>
                    <Text style={styles.headerBtn}>Show all</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.cardContainer}>
                {isLoading ? (
                    <ActivityIndicator
                        size="large"
                        colors = {COLORS.primary}
                    />
                ): error ? (
                    <Text>Something went wrong</Text>
                ): (
                    <FlatList
                        data = {[1,2,3]}
                        renderItem={({item}) => (
                            <PopularMovieCard item={item}/>
                        )}
                        keyExtractor={item => item}
                        contentContainerStyle = {{columnGap: SIZES.medium}}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                )
                }
            </View>
        </View>
    )
}

export default PopularMovie;