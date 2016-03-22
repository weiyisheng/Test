import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text } from 'react-native'

//constants
import { Flex1, JustifyContentCenter, AlignItemsCenter } from '../../constants/StyleConstants'

const LiCai = React.createClass({

  render() {

    return (
      <View style={[Flex1, JustifyContentCenter, AlignItemsCenter]}>
        <Text>理财</Text>
      </View>
    )
  }
})

module.exports = LiCai

const styles = StyleSheet.create({

})
