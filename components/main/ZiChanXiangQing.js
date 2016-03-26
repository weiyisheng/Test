import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text } from 'react-native'
import NavbarScene from 'Test/components/NavbarScene'

//constants
import { Flex1 } from 'Test/constants/StyleConstants'

const ZiChanXiangQing = React.createClass({
  render() {

    return (
      <NavbarScene
        navigator={this.props.navigator}
        title={{title: "资产"}}>

        
      </NavbarScene>
    )
  }
})

module.exports = ZiChanXiangQing

const styles = StyleSheet.create({

})
