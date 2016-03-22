import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text } from 'react-native'

//constants
import { Flex1, JustifyContentCenter, AlignItemsCenter } from '../../constants/StyleConstants'

const ShouYe = React.createClass({

  render() {

    return (
      <View style={[Flex1, JustifyContentCenter, AlignItemsCenter]}>
        <Text>首页</Text>
      </View>
    )
  }
})

module.exports = ShouYe

const styles = StyleSheet.create({

})
