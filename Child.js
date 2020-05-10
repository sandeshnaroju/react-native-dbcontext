/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {ActivityIndicator} from 'react-native'
import React, {Component} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'
import {DbContext} from './db/DbProvider'

export default class Child extends Component {
  static contextType = DbContext

  componentDidMount () {
    console.log('Component Did Mount')
    const db = this.context
    console.log(db)
  }

  render () {
    return (
      <View>
        <Text>
          I am from child Component, I got database reference from App.js. Thank
          you
        </Text>
      </View>
    )
  }
}
