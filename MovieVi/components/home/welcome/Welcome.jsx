import { useState } from 'react'

import { 
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
 } from 'react-native'

import { useRouter } from 'expo-router'

import styles from './welcome.style'
import {icons, SIZES} from '../../../constants'

//the data
const movieTypes = ["Fantasy","Fictional","Thrilling","Wonder"]

// The rendering
const Welcome = ({userName}) => {

  const router = useRouter();
  const [activeMovieType, setActiveMovieType] = useState('Fantasy');

  return (
    <View>
      {/* Welcome lines */}
      <View style = {styles.container}>
        <Text style={styles.userName}>Welcome //{userName}//</Text>
        <Text style = {styles.welcomeMessage}>Movie for tonight</Text>
      </View>

      {/* Search container */}
      <View style = {styles.searchContainer}>
        <View style = {styles.searchWrapper}>
          <TextInput 
              style = {styles.searchInput}
              value=""
              onChange={()=>{}}
              placeholder='What are you looking for?'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      {/* Lists using FlatList */}
      <View style={styles.tabsContainer}>
        <FlatList 
          data={movieTypes}
          renderItem = {
            ({item})=>(
              <TouchableOpacity 
                style = {styles.tab(activeMovieType,item)}
                onPress = {()=>{
                  setActiveMovieType(item)
                  router.push(`/search/${item}`)
                }}
              >
                <Text style={styles.tabText(activeMovieType,item)}>{item}</Text>
              </TouchableOpacity>
            )
          }
          keyExtractor={item => item}
          contentContainerStyle={{columnGap: SIZES.small}}
          horizontal

        />
      </View>

    </View>
  )
}

export default Welcome