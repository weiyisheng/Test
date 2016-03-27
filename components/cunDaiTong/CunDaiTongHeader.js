import React, { View, Text, StyleSheet } from 'react-native'

import { WindowWidth, WindowHeight, WidthScale, HeightScale } from 'Test/constants/StyleConstants'
import { TextColorBlack } from 'Test/constants/StyleConstants'
import { TextRed, TextOrange } from 'Test/constants/colors'

const CunDaiTongHeader = React.createClass({

  render() {
    return (
      <View style={styles.headerContainer}>
        <View style={styles.headerTop}>
          <View style={styles.leftHeader}>
            <View style={styles.headerTitle}>
              <Text style={[TextColorBlack,styles.title]}>存贷通</Text>
            </View>
            <View style={styles.headerTip}>
              <Text style={[TextColorBlack,styles.tip]}>一款用5年定期存款抵押的贷款产品</Text>
            </View>
          </View>
          <View style={styles.headerCoupon}>
            <Text style={[TextColorBlack, {color: TextRed}]}>无利差</Text>
          </View>
        </View>
        <View style={styles.headerBottom}>
          <Text style={TextColorBlack}>已有88545人申请通过啦！</Text>
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#f4f4f4"
  },
  headerTop: {
    flexDirection: 'row',
    paddingTop: 20,
    paddingLeft: 60 * WidthScale,
  },
  leftHeader: {
    width: 180 * WidthScale
  },
  headerTitle: {

  },
  title: {
    fontWeight: 'bold',
    fontSize: 24
  },
  headerTip: {
    marginTop: 16
  },
  tip: {
    fontSize: 16
  },
  headerCoupon: {
    width: 50 * WidthScale,
    height: 50 * WidthScale,
    marginLeft: 40* WidthScale,
    borderRadius: 25 *WidthScale,
    borderWidth: 2,
    borderColor: TextRed,
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerBottom: {
    padding: 6,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: TextOrange,
  }
})

module.exports = CunDaiTongHeader
