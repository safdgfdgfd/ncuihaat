import * as React from 'react'
import { Card, Text } from 'react-native-paper'
import { theme } from '../core/theme'
import { StyleSheet, View } from 'react-native'

const CardLogin = () => (
  <Card>
    <Card.Content>
      <View style={styles.cardTitle}>Title 1</View>
      <View style={styles.cardSubTitle}>
        Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
        consectetur.
      </View>
    </Card.Content>
  </Card>
)
const styles = StyleSheet.create({
  cardTitle: {
    textAlign: 'center',
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 600,
    lineHeight: 28,
  },
  cardSubTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 24,
  },
})
export default CardLogin
