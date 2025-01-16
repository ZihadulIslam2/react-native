import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import profile from './profile';
const index = () => {
  return (
    <View>
      <Text>This is the index page ok</Text>
      <Text>Auro!</Text>
      <Link href="/profile" style={ { color: 'blue'}}>Go to profile</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})