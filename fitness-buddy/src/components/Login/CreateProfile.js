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

export default class CreateProfile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
      passwordNotDifferent: false
    }
  }

  pressSignUp = () => {
    if((this.state.password === this.state.confirmPassword) && this.username) {
      console.log("not Error")
      this.props.signUp(this.state.username, this.state.password)
    } else {
      console.log("error")
      this.setState({
        passwordNotDifferent: true
      })
    }
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.nativeEvent.text
    })
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.nativeEvent.text
    })
  }

  handleConfirmPasswordChange = (e) => {
    this.setState({
      confirmPassword: e.nativeEvent.text
    })
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Image
        style={[styles.background, styles.container]}
        source={background}
        resizeMode="cover"
      >
        <View style={styles.container, styles.errorTextContainer}>
          <Text style={styles.errorText}>
            {this.state.passwordDifferent ? "Passwords are different" : ""}
          </Text>
        </View>
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              returnKeyType="next"
              value={this.state.username}
              onChange={this.handleUsernameChange}
              onSubmitEditing={(event) => {
                this.refs.secondInput.focus();
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              ref='secondInput'
              style={styles.input}
              placeholder="Password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
              returnKeyType="next"
              onSubmitEditing={(event) => {
                this.refs.thirdInput.focus();
              }}
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              ref='thirdInput'
              style={styles.input}
              placeholder="Confirm Password"
              value={this.state.confirmPassword}
              onChange={this.handleConfirmPasswordChange}
              returnKeyType="go"
              onSubmitEditing={this.pressSignUp}
            />
          </View>
          <TouchableOpacity activeOpacity={.5} onPress={this.pressSignUp}>
            <View style={styles.button}>
              <Text style={styles.ButtonText}>
                Create Profile
              </Text>
            </View>
          </TouchableOpacity>
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
  errorTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  errorText: {
    fontSize: 15,
    color: "rgb(255, 0, 0)"
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
  }
})
