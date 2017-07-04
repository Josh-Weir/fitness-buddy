import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native'

const background = require("../img/login.jpg")

export default class LoginForm extends Component {
  constructor(props) {
    super(props)
  }

  pressedCreateProfile = () => {
    console.log('touched')
    this.props.createProfile()
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Image
        style={[styles.background, styles.container]}
        source={background}
        resizeMode="cover"
      >
        <View style={styles.container} />
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.refs.SecondInput.focus();
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              ref='SecondInput'
              style={styles.input}
              placeholder="Password"
              returnKeyType="go"
            />
          </View>
          <TouchableOpacity activeOpacity={.5}>
            <View style={styles.button}>
              <Text style={styles.ButtonText}>
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
          <View>
            <Text style={styles.createProfile} onPress={this.pressedCreateProfile}>
              Create Profile
            </Text>
          </View>
        </View>
        <View style={styles.container} />
      </Image>
    </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    height: null,
    width: null
  },
  wrapper: {
    padding: 15
  },
  inputWrap: {
    flexDirection: "row",
    marginVertical: 10,
    height: 40,
    backgroundColor: 'transparent'

  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fff"
  },
  button: {
    backgroundColor: "rgb(233, 86, 86)",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  ButtonText: {
    fontWeight: "bold",
    color: "#fff",
    fontSize: 18
  },
  createProfile: {
    color: 'rgb(255, 255, 255)',
    fontSize: 20,
    backgroundColor: 'transparent'
  }
})
