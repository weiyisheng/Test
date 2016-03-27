import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, ScrollView } from 'react-native'
import NavbarScene from 'Test/components/NavbarScene'
//constants
import { Flex1 } from 'Test/constants/StyleConstants'

const CardDetails = React.createClass({

  render() {
    return (
      <NavbarScene
        navigator={this.props.navigator}
        title={{title: "银行卡详情"}}>
        <ScrollView style={[Flex1]}>

        </ScrollView>
      </NavbarScene>
    )
  }
})

module.exports = CardDetails

const styles = StyleSheet.create({

})
