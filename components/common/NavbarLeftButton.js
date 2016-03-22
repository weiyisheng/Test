import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, TouchableOpacity, Text } from 'react-native'

const LeftButton = React.createClass({

  render() {
    let { navigator } = this.props

    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <View style={[styles.button]}>
          <Text style={[styles.buttonText]}>返回</Text>
        </View>
      </TouchableOpacity>
    )
  }
})

module.exports = LeftButton

const styles = StyleSheet.create({
  button: {
    width: 60,
    paddingTop: 8,
    paddingLeft: 8
  },
  buttonText: {
    fontSize: 15,
    color: '#fff'
  }
})
