import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, ScrollView } from 'react-native'
import NavbarScene from 'Test/components/NavbarScene'
import ZiChanBox from 'Test/components/ziChanDetails/ZiChanBox'
import Button from 'apsl-react-native-button'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import ZiChan from 'Test/components/ziChanDetails/ZiChan'
import FuZhai from 'Test/components/ziChanDetails/FuZhai'
import CustomTabBar from 'Test/components/ziChanDetails/CustomTabBar'


//constants
import { Flex1, FontSize, ContainerBackgroundColor } from 'Test/constants/StyleConstants'
import { NavbarBack } from 'Test/constants/colors'

const ZiChanXiangQing = React.createClass({

  render() {
    const { navigator } = this.props
    // return (
    //   <NavbarScene
    //     navigator={this.props.navigator}
    //     title={{title: "资产"}}>
    //     <ScrollView style={[Flex1]}>
    //       <View style={{height: 200, width: 3}}>
    //       </View>
    //       <ZiChanBox dianZi={true} navigator={navigator}/>
    //       <ZiChanBox navigator={navigator}/>
    //       <ZiChanBox navigator={navigator}/>
    //
    //
    //       <Button style={{borderWidth: 0}} textStyle={{fontSize: FontSize}}>
    //         + 添加资产账户
    //       </Button>
    //     </ScrollView>
    //   </NavbarScene>
    // )

    return(
      <ScrollableTabView
        renderTabBar={
          () => <CustomTabBar navigator={navigator} />}
        style={[ContainerBackgroundColor]}>
        <ZiChan tabLabel="资产" navigator={navigator}/>
        <FuZhai  tabLabel="负债" navigator={navigator}/>
      </ScrollableTabView>
    )
  }
})

module.exports = ZiChanXiangQing

const styles = StyleSheet.create({
  cot: {

  }
})
