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
import MapViewMarkers from './src/components/MapScreen/Markers'
import MapCallout from './src/components/MapScreen/MapCallout'

const Users = db.ref('users')
const Markers = db.ref('markers')

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      page: "map",
      region:{
        latitude: -33.8821535,
        longitude: 151.204538,
        latitudeDelta: 0.1,
        longitudeDelta: 0.1
      },
      creatingNewMarker: false,
      newMarker: {},
      markers: [],
      user: undefined,
      error: undefined,
      userID: 'Ojv54rUq4ncLD2b5IBYgvypwHNm1',
      newUser: false,
      profileID: '',
      name: '',
      profile: ''
    }

  }
  //          MAP FUNCTIONS
  handleOnMapPress = (e) => {
    const location = {latitude: e.nativeEvent.coordinate.latitude , longitude: e.nativeEvent.coordinate.longitude }
    this.setState({
      newMarker: location,
      creatingNewMarker: true
    })
    // Markers.push({
    //   latitude: e.nativeEvent.coordinate.latitude,
    //   longitude: e.nativeEvent.coordinate.longitude
    // })
  }



  handleMarkerDelete = (e) => {
    console.log("pressed")
  }

  handleGotoProfile = (profileID) => {
    Users.child(profileID).once("value")
    .then(snapshot => {
      const profile = snapshot.val()
       this.setState({
        page: 'profile',
        profileID: profileID,
        name: profile.name,
        details: profile.details
       })
    })
  }
  //          CREATE PROFILE
  goToCreateProfileScreen = () => {
    console.log()
    this.setState({
      page: 'createProfile'
    })
  }

  onSignUp = (username, password) => {

    auth.createUserWithEmailAndPassword(username, password)
    .then((user) => {
      Users.child(user.uid).set({
        name: '',
        details: ''
      })
      this.setState({
        page: 'profile',
        userID: user.uid,
        profileID: user.uid
      })
    })
    .catch(err => {
      console.log('error', err.message)
    })
  }
  //          LOGIN
  handleLogin = (username, password) => {
    auth.signInWithEmailAndPassword(username,password)
    .then((user) => {
      this.setState({
        page: 'map',
        userID: user.uid
      })
    })
    .catch( (err) => {
      console.log(err.message)
    })
  }
  //          USER DETAILS
  handleUserDetailsChange = (name, details, id) => {
    if(name) {
      Users.child(id).set({
        name: name,
        details: details
      })
      this.setState({
        profileID:'',
        page: 'map'
      })
    } else {
      this.setState({
        page: 'map'
      })
    }
  }

  renderNewMarker = () => {
    return (
      <MapViewMarkers
        index={''}
        latitude={this.state.newMarker.latitude}
        longitude={this.state.newMarker.longitude}
        deletePress={this.handleMarkerDelete}
      >
        <MapCallout
          creatingNewMarker={this.state.creatingNewMarker}
          userID={this.state.userID}
        />
      </MapViewMarkers>
    )
  }

  componentDidMount() {
    Markers.on('value', snapshot => {
      console.log(snapshot.val())
      this.setState({
        markers: snapshot.val()
      })
    })
  }

  render() {
    if (this.state.page === "login") {
      return (
        <View style={style.container}>
          <Login createProfile={this.goToCreateProfileScreen} pressLogin={this.handleLogin}/>
        </View>
      )
    } else if (this.state.page === "createProfile") {
      return (
        <View style={style.container}>
          <CreateProfile signUp={this.onSignUp}/>
        </View>
      )
    } else if (this.state.page === "profile") {
      return (
        <View style={style.container}>
          <Profile
            newUser={this.state.newUser}
            userID={this.state.userID}
            profileID={this.state.profileID}
            name={this.state.name}
            details={this.state.details}
            onPressDone={this.handleUserDetailsChange}
          />
        </View>
      )
    } else if (this.state.page === "map") {
      return (
      <View style={style.container}>
        <MapScreen
          pressMap={this.handleOnMapPress}
          region={this.state.region}
          gotoProfile={this.handleGotoProfile}
          userID={this.state.userID}
        >
          {this.state.newMarker ? this.renderNewMarker() : ''}
          {_.map(this.state.markers, (marker, id) => (
              <MapViewMarkers
                index={id}
                latitude={marker.latitude}
                longitude={marker.longitude}
                deletePress={this.handleMarkerDelete}
              >
                <MapCallout/>
              </MapViewMarkers>
            ))
          }
        </MapScreen>
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
