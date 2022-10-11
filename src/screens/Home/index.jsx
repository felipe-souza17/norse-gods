import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import { Card } from '../../components/Card'
import { useNavigation } from '@react-navigation/native'

import config from '../../config'

import { styles } from './styles'

export function Home() {
  const [gods, setGods] = useState([])
  const [realms, setRealms] = useState([])
  const [tales, setTales] = useState([])
  const [civilization, setCivilization] = useState([])

  const navigation = useNavigation()
  useEffect(() => {
    fetch(`${config.API_URL}:${config.API_PORT}/gods`)
      .then(response => response.json())
      .then(data => {
        setGods(data)
      })
  }, [])
  useEffect(() => {
    fetch(`${config.API_URL}:${config.API_PORT}/realms`)
      .then(response => response.json())
      .then(data => {
        setRealms(data)
      })
  }, [])
  useEffect(() => {
    fetch(`${config.API_URL}:${config.API_PORT}/tales`)
      .then(response => response.json())
      .then(data => {
        setTales(data)
      })
  }, [])
  useEffect(() => {
    fetch(`${config.API_URL}:${config.API_PORT}/civilization`)
      .then(response => response.json())
      .then(data => {
        setCivilization(data)
      })
  }, [])

  return (
    <LinearGradient
      colors={['#222224', '#000000']}
      style={styles.backgroundLinear}
    >
      <ScrollView>
        <View style={{ marginTop: 50 }}>
          <View style={styles.cardContainer}>
            <Image
              source={require('../../../assets/card.png')}
              style={styles.cardImage}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.textList}>Deuses</Text>
            <FlatList
              data={gods}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Card
                  data={item}
                  handleAbout={() =>
                    navigation.navigate('about', { api: 'gods', id: item.id })
                  }
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.textList}>Mundos</Text>
            <FlatList
              data={realms}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Card
                  data={item}
                  handleAbout={() =>
                    navigation.navigate('about', { api: 'realms', id: item.id })
                  }
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.textList}>Contos</Text>
            <FlatList
              data={tales}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Card
                  data={item}
                  handleAbout={() =>
                    navigation.navigate('about', { api: 'tales', id: item.id })
                  }
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.textList}>Cultura</Text>
            <FlatList
              data={civilization}
              keyExtractor={item => item.id}
              renderItem={({ item }) => (
                <Card
                  data={item}
                  handleAbout={() =>
                    navigation.navigate('about', {
                      api: 'civilization',
                      id: item.id
                    })
                  }
                />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </ScrollView>
    </LinearGradient>
  )
}
