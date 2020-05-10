/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {View, Text} from 'react-native'

import {DbProvider} from './db/DbProvider'
import Child from './Child'

const App: () => React$Node = () => {
  return (
    <DbProvider>
      <View>
        <Child />
      </View>
    </DbProvider>
  )
}

export default App
