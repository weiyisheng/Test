import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, TouchableOpacity, Image,
  ScrollView } from 'react-native'

//constants
import { Flex1, FlexRow, WidthScale } from 'Test/constants/StyleConstants'
import { NavbarBack, TextBlack } from 'Test/constants/colors'
import ZiChanXiangQing from 'Test/components/main/ZiChanXiangQing'

const ShouYe = React.createClass({

  render() {

    return (
      <ScrollView style={[Flex1]}>
        <View style={[styles.infoBox]}>
          <View style={[FlexRow, styles.userInfo]}>
            <Text style={[styles.name]}>张丽</Text>
            <Text style={[styles.moneyNum]}>¥1,320,002.00</Text>
            <Image style={[{width: 15, height: 15, backgroundColor: "#000"}]}/>
          </View>
          <View style={[FlexRow, {justifyContent: 'space-between'}]}>
            <TouchableOpacity
              onPress={() => this.props.navigator.push({component: ZiChanXiangQing})}>
              <View style={[FlexRow]}>
                <Image style={{width: 17, height: 17, backgroundColor: "#000"}}/>
                <Text style={[styles.infoBtnText]}>资产详情</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={[FlexRow]}>
                <Image style={{width: 17, height: 17, backgroundColor: "#000"}}/>
                <Text style={[styles.infoBtnText]}>添加资产账户</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{backgroundColor: "#f0f0f0", height: 180}}>

        </View>

        <View style={{backgroundColor: "#FEB504", height: 480}}>
          <Text style={{position: 'absolute', bottom: 0}}>bottom</Text>
        </View>
      </ScrollView>
    )
  }
})

module.exports = ShouYe

const styles = StyleSheet.create({
  infoBox: {
    backgroundColor: NavbarBack,
    paddingTop: 32 * WidthScale,
    paddingBottom: 32 * WidthScale,
    paddingLeft: 20 * WidthScale,
    paddingRight: 20 * WidthScale
  },
  userInfo: {
    marginBottom: 20
  },
  name: {
    fontSize: 19,
    color: TextBlack
  },
  moneyNum: {
    fontSize: 19,
    paddingLeft: 13,
    paddingRight: 13,
    color: TextBlack
  },
  infoBtnText: {
    fontSize: 17,
    color: "#909090",
    paddingLeft: 8
  }
})
