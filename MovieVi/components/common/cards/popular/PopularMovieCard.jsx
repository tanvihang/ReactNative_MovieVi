import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './popularmoviecard.style'

const PopularMovieCard = ({item, selectedMovie, handleCardPress}) => {
  return (
    <TouchableOpacity 
      style={styles.container(selectedMovie,item)}
      onPress={()=> handleCardPress(item)}

    />
  )
}

export default PopularMovieCard