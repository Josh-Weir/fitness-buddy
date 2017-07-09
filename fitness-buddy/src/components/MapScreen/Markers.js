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

  render() {
    return (
      <MapView.Marker
        onPress={this.pressPin}
        coordinate={{
          latitude:this.props.latitude,
          longitude:this.props.longitude
        }}
      >
        {this.props.children}
      </MapView.Marker>
    )
  }
}
