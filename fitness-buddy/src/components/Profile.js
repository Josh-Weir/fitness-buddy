import React, {Component} from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'

export default class Profile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            style={styles.image}
            source={require('./img/gary.jpg')}
          />
          <Text style={styles.name}>
            Joshua Weir
          </Text>
          <View style={styles.filler}/>
        </View>
        <Text style={styles.details}>
          This will be a description of what the person is like
        </Text>
      </View>
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
    flex: 1,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "rgb(167, 167, 167)"
  }
})
