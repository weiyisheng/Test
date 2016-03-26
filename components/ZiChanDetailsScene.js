import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, ScrollView } from 'react-native'
import NavbarScene from 'Test/components/NavbarScene'
import ZiChanBox from 'Test/components/ziChanDetails/ZiChanBox'
//constants
import { Flex1 } from 'Test/constants/StyleConstants'

const ZiChanXiangQing = React.createClass({

  render() {
    return (
      <NavbarScene
        navigator={this.props.navigator}
        title={{title: "资产"}}>
        <ScrollView style={[Flex1]}>
          <View style={{height: 200, width: 3}}>
          </View>
          <ZiChanBox dianZi={true}/>
          <ZiChanBox />
          <ZiChanBox />

        </ScrollView>
      </NavbarScene>
    )
  }
})

module.exports = ZiChanXiangQing

const styles = StyleSheet.create({

})
