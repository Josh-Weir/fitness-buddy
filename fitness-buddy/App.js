import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text
} from 'react-native'
import _ from 'lodash'

import db from './src/libs/db'
import auth from './src/libs/auth'

import Profile from './src/components/Profile.js'
import Login from './src/components/Login/Login'
import CreateProfile from './src/components/Login/CreateProfile'
import MapScreen from './src/components/MapScreen/MapScreen'
import Markers from './src/components/MapScreen/Markers'
import MapCallout from './src/components/MapScreen/MapCallout'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: "login",
      region:{
        latitude: -33.8821535,
        longitude: 151.204538,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      markers: [],
      user: undefined,
      error: undefined
    }

  }
  goToCreateProfileScreen = () => {
    this.setState({
      page: 'createProfile'
    })
  }

  handleOnMapPress = (e) => {
    const location = {latitude: e.nativeEvent.coordinate.latitude , longitude: e.nativeEvent.coordinate.longitude }
    this.setState({
      markers: this.state.markers.concat(location)
    })
  }

  handleMarkerDelete = (e) => {
    console.log("pressed")
    // this.setState({
    //   markers: this.state.markers.slice()
    // })
  }

  onSignUp = (username, password) => {

    auth.createUserWithEmailAndPassword(username, password)
    .then(() => {
      this.setState({
        error: undefined
      })
    })
    .catch(err => {
      this.setState({
        error: err.message
      })
    })
  }

  render() {
    if (this.state.page === "login") {
      return (
        <View style={style.container}>
          <Login createProfile={this.goToCreateProfileScreen}/>
        </View>
      )
    } else if (this.state.page === "createProfile") {
      return (
        <View style={style.container}>
          <Text>{ this.state.error ? this.state.error : null }</Text>
          <CreateProfile signUp={this.onSignUp}/>
        </View>
      )
    } else if (this.state.page === "profile") {
      return (
        <View style={style.container}>
          <Profile />
        </View>
      )
    } else if (this.state.page === "map") {
      return (
      <View style={style.container}>
        <MapScreen
          pressMap={this.handleOnMapPress}
          region={this.state.region}
        >
          {this.state.markers.map((marker, key) => {
            return (
              <Markers
                index={key}
                latitude={marker.latitude}
                longitude={marker.longitude}
                deletePress={this.handleMarkerDelete}
              />
            )
          })}
        </MapScreen>
        <View style={style.menu}/>
      </View>
      )
    }
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  menu: {
    backgroundColor: "#fff",
    height: 50,
    alignSelf: 'stretch'
  }
})
