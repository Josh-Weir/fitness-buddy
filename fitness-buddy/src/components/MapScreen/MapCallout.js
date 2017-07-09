import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native'
import {
  MapView
} from 'expo'

export default class MapCallout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: '',
      excercise: ''
    }

  }

  onCreatePress = () => {
    this.props.creaeExercie()
  }

  handleNameChane = (e) => {
    this.setState({
      excercise: e.nativeEvent.text
    })
  }

  handleNameChane = (e) => {
    this.setState({
      time: e.nativeEvent.text
    })
  }

  displayOwnerDetails = () => {
    return (
      <View style={styles.header}>
        <Image
          source={require('../img/gary.jpg')}
          style={styles.profileImage}
        />
        <Text>
          Josh Weir
        </Text>
      </View>
    )

  }

  displayExerciseDetails = () => {
    if(this.props.creatingNewMarker) {

      return (
        <View style={styles.details}>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.name}
              style={styles.input}
              placeholder='Exercise'
              onChange={this.handleNameChane}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.name}
              style={styles.input}
              placeholder='Time'
              onChange={this.handleTimeChane}
            />
          </View>
        </View>
      )

    } else {
      return (
        <View style={styles.details}>
          <Text>
            HIIT
          </Text>
          <Text>
            6:00pm
          </Text>
        </View>
      )
    }
  }

  displayButton = () => {
    if(this.props.creatingNewMarker) {
      return(
        <View>
          <TouchableOpacity activeOpacity={.5} onPress={this.onCreatePress}>
            <View style={styles.button}>
              <Text style={styles.ButtonText}>
                Done
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View>
          <TouchableOpacity activeOpacity={.5} onPress={this.onJoinPress}>
            <View style={styles.button}>
              <Text style={styles.ButtonText}>
                Join
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
  }

  render() {
    return (
      <MapView.Callout style={styles.callout}>
        {this.displayOwnerDetails()}
        {this.displayExerciseDetails()}
        {this.displayButton()}
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
    borderRadius: 25,
    marginRight: 10
  },
  details: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    flex: 1
  },
  detailsText: {
    fontSize:16
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
