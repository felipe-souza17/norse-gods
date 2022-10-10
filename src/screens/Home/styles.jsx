import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backgroundLinear: {
    height: Dimensions.get('window').height
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardImage: {
    width: 320
  },
  listContainer: {
    marginVertical: 10,
    marginHorizontal: 20
  },
  textList: {
    fontSize: 25,
    color: 'white',
    fontWeight: '600'
  }
})
