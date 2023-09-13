import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Footer from '../components/Footer'
import LoginImg from '../assets/loginSymbols.png'
import CardLogin from '../components/Card'
import { View } from 'react-native-web'
import MainBackground from '../components/mainBackGround'
export default function PreLogin({ navigation }) {
  return (
    <MainBackground>
      <Logo />
      <Header>Street Vendor System</Header>
      <Paragraph>Connecting Street vendors all over India</Paragraph>
      <Footer>Powered by VegaSega Solutions</Footer>
      <CardLogin />
    </MainBackground>
  )
}
