import React from 'react'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'

export function Card({ data, handleAbout }) {
  return (
    <TouchableOpacity onPress={handleAbout}>
      <View style={styles.cardContainer}>
        <Image style={styles.imageCard} source={{ uri: data.bannerUrl }} />
        <Text style={styles.textCard}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  )
}
