import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
} from 'react-native'
import {
  MapView
} from 'expo'

export default class MapCallout extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <MapView.Callout style={styles.callout}>
        <Text style={styles.delete}>
          X
        </Text>
        <View style={styles.header}>
          <Image
            source={require('../img/gary.jpg')}
            style={styles.profileImage}
          />
          <Text>
            Josh Weir
          </Text>
        </View>
        <View style={styles.details}>
          <Text>
            HIIT
          </Text>
          <Text>
            6:00pm
          </Text>
          <TouchableOpacity activeOpacity={.5} onPress={this.onDeletePress}>
            <View style={styles.button}>
              <Text style={styles.ButtonText}>
                Join
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </MapView.Callout>
    )
  }
}

const styles = StyleSheet.create({
  delete: {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 20
  },
  header: {
    padding: 10,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  profileImage: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: "rgb(233, 86, 86)",
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  ButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18
  }
})
