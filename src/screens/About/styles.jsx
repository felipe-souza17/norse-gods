import { Dimensions, StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  backgroundLinear: {
    height: Dimensions.get('window').height,
    position: 'relative',
    zIndex: 1
  },
  backgroundImage: {
    height: 543,
    position: 'relative',
    zIndex: -1
  },
  title: {
    fontSize: 36,
    color: 'white',
    fontWeight: '300',
    textAlign: 'center'
  },
  description: {
    fontSize: 18,
    color: 'white',
    fontWeight: '200',
    textAlign: 'center',
    padding: 10
  }
})
