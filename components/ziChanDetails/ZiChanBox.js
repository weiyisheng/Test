import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, TouchableOpacity } from 'react-native'
import ZiChanItem from 'Test/components/ziChanDetails/ZiChanItem'
import Button from 'apsl-react-native-button'
//constants
import { FlexRow, WidthScale, BorderBottom, JustifyContentCenter,
  AlignItemsCenter, BorderTop, ButtonStyle, ButtonText } from 'Test/constants/StyleConstants'
import { TextBlack, TextYellow } from 'Test/constants/colors'
// <TouchableOpacity
//   style={[JustifyContentCenter, AlignItemsCenter,
//     styles.btn,
//     {backgroundColor: "#828282", marginRight: 9 * WidthScale}]}>
//   <Text style={[styles.btnText]}>转出</Text>
// </TouchableOpacity>
// <TouchableOpacity
//   style={[JustifyContentCenter, AlignItemsCenter, styles.btn, {backgroundColor: TextYellow}]}>
//   <Text style={[styles.btnText]}>转入</Text>
// </TouchableOpacity>
const ZiChanBox = React.createClass({

  render() {
    let { dianZi } = this.props
    if(dianZi) {
      return (
        <View style={[styles.boxs]}>
          <View style={[FlexRow, styles.boxTitle]}>
            <Text style={[styles.boxName]}>电子账户</Text>
            <Text style={[styles.boxOpt]}>账户管理</Text>
          </View>

          <View style={[BorderTop, styles.item]}>
            <Text style={[styles.dianziNum]}>48493***7979897</Text>
            <Text style={[styles.dianziMoney]}>¥10.00</Text>
            <View style={[FlexRow, JustifyContentCenter, {marginBottom: 18 * WidthScale}]}>
              <Button
                style={[ButtonStyle, {backgroundColor: "#828282", marginRight: 9 * WidthScale}]}
                textStyle={[ButtonText]}>
                转出
              </Button>

              <Button
                style={[ButtonStyle, {backgroundColor: TextYellow}]}
                textStyle={[ButtonText]}>
                转入
              </Button>
            </View>
          </View>

        </View>
      )
    } else {
      return (
        <View style={[styles.boxs]}>
          <View style={[FlexRow, styles.boxTitle]}>
            <Text style={[styles.boxName]}>银行卡</Text>
          </View>

          <ZiChanItem />
          <ZiChanItem />

        </View>
      )
    }
  }
})

module.exports = ZiChanBox


const styles = StyleSheet.create({
  boxs: {
    marginTop: 10,
    marginBottom: 15,
  },
  boxTitle: {
    borderLeftWidth: 6,
    borderLeftColor: "#262626",
    backgroundColor: "#dadada",
    justifyContent: 'space-between',
  },
  boxName: {
    alignSelf: "center",
    fontSize: 14,
    paddingTop: 13 * WidthScale,
    paddingBottom: 13 * WidthScale,
    paddingLeft: 6 * WidthScale,
    color: TextBlack,
    width: 100
  },
  boxOpt: {
    fontSize: 14,
    color: "#D11E10",
    alignSelf: "center",
    paddingRight: 18 * WidthScale,
  },
  item: {
    paddingLeft: 13 * WidthScale,
    backgroundColor: "#f4f4f4",
    borderBottomColor: "#ccc"
  },
  dianziNum: {
    fontSize: 13,
    color: TextBlack,
    paddingTop: 10 * WidthScale,
    paddingBottom: 10 * WidthScale,
    textAlign: 'center'
  },
  dianziMoney: {
    fontSize: 17,
    paddingBottom: 12 * WidthScale,
    textAlign: 'center'
  },
})
