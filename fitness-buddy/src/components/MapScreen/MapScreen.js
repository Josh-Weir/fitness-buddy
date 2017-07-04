import React, {Component} from 'react';
import {StyleSheet} from 'react-native'
import {MapView} from 'expo';

export default class MapScreen extends Component {
  constructor(props){
    super(props)

  }

  pressMap = (e) => {
    this.props.pressMap(e)
  }

  render() {
    return (
      <MapView
        style={styles.map}
        initialRegion={this.props.region}
        onPress={this.pressMap}
      >
        {this.props.children}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
})
