import {Stack} from "expo-router";

// used to wait for fonts to be loaded
import { useCallback } from "react";

// ability to use custom fonts
import {useFonts} from 'expo-font'

//used to tell the splash screen to remain visible until it has been explicity told to hide
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync();

const Layout = () => {

    //initializing fonts
    const [fontsLoaded] = useFonts({
        "DMBold" : require('../assets/fonts/DMSans-Bold.ttf'),
        "DMMedium" : require('../assets/fonts/DMSans-Medium.ttf'),
        "DMRegular" : require('../assets/fonts/DMSans-Regular.ttf'),
    })

    //use to watch fontsLoaded
    const onLayoutRootView = useCallback(async()=>{
        if(fontsLoaded){
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);
    

    if(!fontsLoaded) return null;

    return <Stack onLayout={onLayoutRootView}/>;
}

export default Layout;