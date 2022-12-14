import React, { useEffect, useState } from 'react'
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  View
} from 'react-native'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'

import config from '../../config'

export function About({ route }) {
  const [aboutData, setAboutData] = useState(null)

  const navigation = useNavigation()
  const { api, id } = route.params

  useEffect(() => {
    const showInfo = async () => {
      const data = await fetch(
        `${config.API_URL}:${config.API_PORT}/${api}/${id}`
      )
      const json = await data.json()
      setAboutData(json)
    }
    showInfo()
  }, [])

  return (
    <View>
      <TouchableOpacity
        style={styles.arrowBack}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="white" />
      </TouchableOpacity>
      <LinearGradient
        colors={['#FFFFFF00', '#000000']}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 0.0, y: 0.65 }}
        style={styles.backgroundLinear}
      >
        {aboutData ? (
          <ImageBackground
            style={styles.backgroundImage}
            source={{ uri: aboutData[0].bannerUrl }}
          />
        ) : (
          <ActivityIndicator />
        )}
        {aboutData ? (
          <ScrollView>
            <Text style={styles.title}>{aboutData[0].name}</Text>
            <Text style={styles.description}>{aboutData[0].description}</Text>
          </ScrollView>
        ) : (
          <ActivityIndicator />
        )}
      </LinearGradient>
    </View>
  )
}
