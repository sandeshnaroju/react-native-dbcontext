/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react'

import {Database} from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import schema from '../model/schema'
import User from '../model/User'
import migrations from '../model/migrations'
const adapter = new SQLiteAdapter({
  schema: schema,
  migrations,
})

const database = new Database({
  adapter,
  modelClasses: [User],
  actionsEnabled: true,
})
const DbContext = React.createContext('DEFAULT')
export default class DbProvider extends Component {
  render () {
    return (
      <DbContext.Provider value={database}>
        {this.props.children}
      </DbContext.Provider>
    )
  }
}

export {DbContext, DbProvider}
