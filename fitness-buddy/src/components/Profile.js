import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

export default class Profile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sectionEditing: 'text',
      name: props.name,
      details: props.details
    }
  }

  handlePressDone = () => {
    if(this.props.userID === this.props.profileID) {
      this.props.onPressDone(this.state.name, this.state.details, this.props.userID)
    }
  }

  handleNameChane = (e) => {
    this.setState({
      name: e.nativeEvent.text
    })
  }

  handleDetailsChange = (e) => {
    this.setState({
      details: e.nativeEvent.text
    })
  }

  displayName = () => {
    if (this.props.userID === this.props.profileID) {
      if (this.state.sectionEditing === 'text') {
        return (
          <TextInput
            value={this.state.name}
            style={styles.input}
            placeholder='Enter Name'
            onChange={this.handleNameChane}
          />
        )
      } else {
        return (
        <Text style={styles.name}>
          {this.state.name}
        </Text>
        )
      }
    } else {
      return (
        <Text style={styles.name}>
          {this.state.name}
        </Text>
      )
    }
  }

  displayDetails = () => {
    if (this.props.userID === this.props.profileID) {
      if (this.state.sectionEditing === 'text') {
        return (
          <TextInput
            value={this.state.details}
            style={styles.input, styles.details}
            onChange={this.handleDetailsChange}
            placeholder='Please write something about you'
            multiline={true}
          />
        )
      } else {
        return (
          <Text style={styles.details}>
            {this.state.details}
          </Text>
        )
      }
    } else {
      return (
        <Text style={styles.details}>
          {this.state.details}
        </Text>
      )
    }
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image
              style={styles.image}
              source={require('./img/gary.jpg')}
            />
            {this.displayName()}
            <View style={styles.filler}/>
          </View>
          <View style={styles.container}>
          {this.displayDetails()}
          </View>
          <TouchableOpacity activeOpacity={.5} onPress={this.handlePressDone}>
            <View style={styles.button}>
              <Text style={styles.ButtonText}>
                Done
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1
  },
  header: {
    padding: 10,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  name: {
    fontSize: 20,
    display: 'inline'
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 20
  },
  filler: {
    flex: 1
  },
  details: {
    fontSize:16,
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgb(167, 167, 167)"
  },
  button: {
    backgroundColor: "rgb(233, 86, 86)",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  ButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18
  }
})
