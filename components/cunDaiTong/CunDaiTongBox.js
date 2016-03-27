import React, { View, Text, StyleSheet } from 'react-native'

import { WindowWidth, WindowHeight, WidthScale, HeightScale } from 'Test/constants/StyleConstants'
import { TextColorBlack } from 'Test/constants/StyleConstants'

const CunDaiTongBox = React.createClass({


  render() {
    return (
      <View style={styles.boxContainer}>
        <View style={styles.boxHeader}>
          <Text style={TextColorBlack}>贷款规则</Text>
        </View>
        <View style={styles.boxItem}>
          <View style={styles.orderItem}>
            <Text style={[TextColorBlack,styles.orderNumber]}>1</Text>
          </View>
          <View style={styles.boxItemInfo}>
            <Text style={[TextColorBlack,styles.boxItemTitle]}>抵押</Text>
            <Text style={[TextColorBlack,styles.boxItemDesc]}>持有履约中的整存整取或存本取息的定期存款，可用于抵押，如惠利存、月月红</Text>
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={styles.orderItem}>
            <Text style={[TextColorBlack,styles.orderNumber]}>2</Text>
          </View>
          <View style={styles.boxItemInfo}>
            <Text style={[TextColorBlack,styles.boxItemTitle]}>额度</Text>
            <Text style={[TextColorBlack,styles.boxItemDesc]}>贷款最高额度为抵押存款总额</Text>
          </View>
        </View>
        <View style={styles.boxItem}>
          <View style={styles.orderItem}>
            <Text style={[TextColorBlack,styles.orderNumber]}>3</Text>
          </View>
          <View style={styles.boxItemInfo}>
            <Text style={[TextColorBlack,styles.boxItemTitle]}>利息</Text>
            <Text style={[TextColorBlack,styles.boxItemDesc]}>
              贷款利息用当期的定期存款利息抵扣，无须另外支付贷款信息。
              如抵押一个10万的定期存款，只申请用款5玩，则贷款利息只须用5万定期存款的利息抵扣
            </Text>
          </View>
        </View>
      </View>
    )
  }
})

const styles = StyleSheet.create({
  boxContainer: {

  },
  boxHeader: {
    marginTop: 20 * WidthScale,
    marginLeft: 20 * WidthScale,
    marginBottom: 20 * WidthScale
  },
  boxItem: {
    flexDirection: 'row',
    backgroundColor: "#f4f4f4",
    paddingLeft: 20 * WidthScale,
    paddingTop: 20 * HeightScale,
    paddingBottom: 10 * HeightScale,
    marginBottom: 3
  },
  orderItem: {
    width: 40 * WidthScale,
    height: 40 * WidthScale,
    borderRadius: 20 * WidthScale,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#787878'
  },
  orderNumber: {
    color: '#ccc',
    fontSize: 17
  },
  boxItemInfo: {
    marginLeft: 20 * WidthScale,
    marginTop: 8 * HeightScale
  },
  boxItemTitle: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  boxItemDesc: {
    marginTop: 10 * HeightScale,
    width: 290 * WidthScale
  },
})

module.exports = CunDaiTongBox
