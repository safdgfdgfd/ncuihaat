import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Footer(props) {
  return <Text style={styles.text} {...props} />
}

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    textAlign: 'center',
    fontWeight: 500,
    lineHeight: 16,
    color: theme.colors.white,
  },
})
