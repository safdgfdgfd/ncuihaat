import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'

export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    padding: 0,
    fontSize: 22,
    color: theme.colors.white,
    fontWeight: '400',
    paddingVertical: 12,
  },
})
