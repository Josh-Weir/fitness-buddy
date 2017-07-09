import React, {Component} from 'react';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'
import {MapView} from 'expo';

export default class MapScreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      addMarker: false
    }

  }

  pressMap = (e) => {
    if(this.state.addMarker) {
      this.props.pressMap(e)
      this.setState({
        addMarker: false
      })
    }
  }

  enableMarkerPlacement = (e) => {
    this.setState({
      addMarker: !this.state.addMarker
    })
  }

  pressProfile = () => {
    this.props.gotoProfile(this.props.userID)
  }

  render() {
    return (
      <View pointerEvent='none' style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.props.region}
          onPress={this.pressMap}
        >
          {this.props.children}
        </MapView>
        <View style={styles.menu}>
          <Text onPress={this.enableMarkerPlacement}>
            Add Marker
          </Text>
          <Text onPress={this.pressProfile}>
            Profile
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  map: {
    flex: 1,
    alignContent: 'flex-start'
  },
  menu: {
    height: 50,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})
