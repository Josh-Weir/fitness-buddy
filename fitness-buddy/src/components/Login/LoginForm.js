import React from 'react'
import {View, StyleSheet, Text, TextInput} from 'react-native'

export default class LoginForm extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container} />
        <View style={styles.wrapper}>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder="User Name"
            />
          </View>
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              placeholder="Password"
            />
          </View>
        </View>
        <View style={styles.container} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  }
})
