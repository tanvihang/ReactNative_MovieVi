import { useState } from 'react';
import {View, Text, ScrollView, SafeAreaView, ImageBackgroundBase} from 'react-native';
import {Stack, useRouter} from 'expo-router';

import {COLORS, icons, images, SIZES} from '../constants/index';
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components'
import {RecentMovie, PopularMovie, Hero} from '../components'

const Home = ()=>{

    const router = useRouter();

    return (
        <SafeAreaView style={{flex: 1, backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
                options ={{
                    headerStyle:{backgroundColor:COLORS.gray},
                    headerShadowVisible:false,
                    headerLeft: ()=>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                    ),
                    headerRight: ()=>(
                        <ScreenHeaderBtn iconUrl={images.profile1} dimension="100%"/>
                    ),
                    headerTitle: ""
                }}
            />  
        
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style = {{flex:1, padding:SIZES.medium}}>

                    <Hero/>

                    <Welcome 
                        userName="Angus Tan"
                    />
                    
                    <PopularMovie
                    
                    />

                    <RecentMovie
                    
                    />
                </View>
            </ScrollView>    
            
        </SafeAreaView>
    )
}

export default Home;