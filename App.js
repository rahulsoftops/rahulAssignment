import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import store from './src/redux/store/Index'
import {Provider} from 'react-redux'
import Home from './src/screen/Home'
export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#d5d5d5"}}>
       <Provider store={store}>
<Home/>
       </Provider>
      </View>
    )
  }
}

const styles = StyleSheet.create({})
