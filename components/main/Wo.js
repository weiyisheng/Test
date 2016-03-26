import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text } from 'react-native'

//constants
import { Flex1, JustifyContentCenter, AlignItemsCenter } from 'Test/constants/StyleConstants'

const Wo = React.createClass({

  render() {

    return (
      <View style={[Flex1, JustifyContentCenter, AlignItemsCenter]}>
        <Text>我</Text>
      </View>
    )
  }
})

module.exports = Wo

const styles = StyleSheet.create({

})
