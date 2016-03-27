import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, ScrollView } from 'react-native'
import NavbarScene from 'Test/components/NavbarScene'
import ZiChanBox from 'Test/components/ziChanDetails/ZiChanBox'
import Button from 'apsl-react-native-button'

//constants
import { Flex1 } from 'Test/constants/StyleConstants'

const ZiChanXiangQing = React.createClass({

  render() {
    const { navigator } = this.props
    return (
      <NavbarScene
        navigator={this.props.navigator}
        title={{title: "资产"}}>
        <ScrollView style={[Flex1]}>
          <View style={{height: 200, width: 3}}>
          </View>
          <ZiChanBox dianZi={true} navigator={navigator}/>
          <ZiChanBox navigator={navigator}/>
          <ZiChanBox navigator={navigator}/>


          <Button style={{borderWidth: 0}} textStyle={{fontSize: 15}}>
            + 添加资产账户
          </Button>
        </ScrollView>
      </NavbarScene>
    )
  }
})

module.exports = ZiChanXiangQing

const styles = StyleSheet.create({

})
