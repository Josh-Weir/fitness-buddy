import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native'
import {MapView} from 'expo';

export default class Markers extends Component {
  constructor(props){
    super(props)

    this.state = {
      callout: false
    }

  }

  onDeletePress = (e) => {
    this.props.deletePress(e)
  }

  render() {
    return (
      <MapView.Marker
        coordinate={{
          latitude:this.props.latitude,
          longitude:this.props.longitude
        }}
      >

      </MapView.Marker>
    )
  }
}
