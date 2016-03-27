import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import NavbarScene from 'Test/components/NavbarScene'
import Cell from 'Test/components/common/Cell'
import CardDetails from 'Test/components/CardDetailsScene'

//constants
import { Flex1, FlexRow, WidthScale, BorderTop,
  JustifyContentBetween, JustifyContentCenter, AlignItemsCenter,
  WindowWidth } from 'Test/constants/StyleConstants'
import { TextBlack, TextYellow } from 'Test/constants/colors'

const ZiChanItem = React.createClass({

  render() {
    return (
      <View style={[BorderTop, styles.item]}>
        <View style={[styles.itemTitleBorder]}>
          <View style={[FlexRow, JustifyContentBetween, styles.itemTitle]}>
            <Text style={[styles.itemTitleText]}>383392992*＊＊3485988</Text>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => this.props.navigator.push({component: CardDetails})}>
              <Text style={[styles.detailText]}>
                查看详情 >
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.itemBody]}>
          <Cell left={{text: "总额"}} right={{text: "¥94.003.00"}}/>
          <Cell left={{text: "定期存款"}} right={{text: "¥987694.003.00"}}/>
          <Cell left={{text: "活期存款"}} right={{text: "¥7654394.003.00"}}/>
        </View>

      </View>
    )
  }
})

module.exports = ZiChanItem

const styles = StyleSheet.create({
  item: {
    paddingLeft: 13 * WidthScale,
    backgroundColor: "#f4f4f4",
    borderTopColor: "#ccc"
  },
  itemTitleBorder: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderStyle: "dashed"
  },
  itemTitle: {
    marginTop: -1,
    marginLeft: -1,
    marginRight: -1,
    backgroundColor: "#f4f4f4"
  },
  itemTitleText: {
    color: TextBlack,
    fontSize: 13,
    alignSelf: "center"
  },
  itemBody: {
    paddingTop: 15 * WidthScale
  },
  detailText: {
    paddingTop: 12 * WidthScale,
    paddingBottom: 12 * WidthScale,
    paddingRight: 13 * WidthScale,
    color: TextYellow,
    fontSize: 13,
    width: 80
  },
})
