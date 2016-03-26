import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import NavbarScene from 'Test/components/NavbarScene'

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
            <TouchableOpacity style={{alignSelf: 'center'}}>
              <Text style={[styles.detailText]}>
                查看详情 >
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.itemBody]}>
          <View style={[FlexRow, styles.cell]}>
            <Text style={[styles.cellText]}>总额</Text>
            <Text style={[styles.cellText]}>¥994.003.00</Text>
          </View>

          <View style={[FlexRow, styles.cell]}>
            <Text style={[styles.cellText]}>活期</Text>
            <Text style={[styles.cellText]}>¥94.003.00</Text>
          </View>

          <View style={[FlexRow, styles.cell]}>
            <Text style={[styles.cellText]}>定期（2笔）</Text>
            <Text style={[styles.cellText]}>¥654.003.00</Text>
          </View>
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
  },
  cell: {
    marginBottom: 15 * WidthScale,
    justifyContent: 'space-between'
  },
  cellText: {
    fontSize: 13,
    color: TextBlack,
    marginRight: 13 * WidthScale
  }
})
