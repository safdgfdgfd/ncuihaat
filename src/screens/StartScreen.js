import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Footer from '../components/Footer'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Street Vendor System</Header>
      <Paragraph>Connecting Street vendors all over India</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('PreLogin')}>
        Explore App
      </Button>
      <Footer>Powered by VegaSega Solutions</Footer>
    </Background>
  )
}
