import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, ScrollView } from 'react-native'
import NavbarScene from 'Test/components/NavbarScene'
import Modal from 'react-native-modalbox'
import Cell from 'Test/components/common/Cell'
import Button from 'apsl-react-native-button'

//constants
import { Flex1, WidthScale, BorderBottom, FontSize } from 'Test/constants/StyleConstants'
import { BoxItemBackColor, TextYellow, TextBlack, TextRed } from 'Test/constants/colors'

const CardDetails = React.createClass({

  renderDingQiBox() {
    return (
      <View style={{paddingLeft: 10 * WidthScale, marginTop: 15 * WidthScale}}>
        <Cell
          left={{text: "定期20150213XXXXX"}}
          right={{text: "¥49948555.00"}}/>
        <Cell
          left={{text: "整存整取"}}
          right={{text: "已到期"}}
          rightStyle={{color: TextYellow}}/>
        <Cell
            left={{text: "起止日期"}}
            right={{text: "2015.02.19 - 2016.02.19"}}/>
        <Cell
            left={{text: "总收益"}}
            right={{text: "¥4995.00"}}/>
      </View>
    )
  },

  render() {
    return (
      <NavbarScene
        navigator={this.props.navigator}
        title={{title: "银行卡详情"}}
        rightButton={{
          title: "删除",
          handler: () => this.delModal.open()
        }}>
        <ScrollView style={[Flex1]}>
          <View style={[BoxItemBackColor]}>
            <Text style={[styles.count]}>883944*** *** *** 2383</Text>
            <Cell
              left={{text: "总额"}}
              right={{text: "¥884440988.00"}}/>
          </View>

          <View style={[BorderBottom]}>
            <Cell
              left={{text: "活期"}}
              right={{text: "¥608440988.00"}}
              style={{marginTop: 13 * WidthScale, marginBottom: 0 * WidthScale}}/>
            <Button
              style={{borderWidth: 0, justifyContent: 'flex-end',
                height: 20,
                marginBottom: 13 * WidthScale,
                marginTop: 5 * WidthScale}}
              textStyle={{textAlign: "right", fontSize: FontSize - 2,
                color: TextYellow, marginRight: 13 * WidthScale}}>交易查询 > </Button>
          </View>

          <Cell
            left={{text: "定期"}}
            right={{text: "¥6084988.00"}}
            style={{marginTop: 13 * WidthScale, marginBottom: 7 * WidthScale}}/>

          {this.renderDingQiBox()}
          {this.renderDingQiBox()}
          {this.renderDingQiBox()}
          {this.renderDingQiBox()}

        </ScrollView>
        <Modal
          ref={c => this.delModal = c}
          position={"bottom"}
          style={[styles.delModal]}>
          <Text style={[styles.modalInfo]}>你要删除该账户吗？</Text>
          <Button
            style={[styles.modalBtn, {borderColor: TextRed}]}
            textStyle={{fontSize: FontSize, color: TextRed }}
            isLoading={false}>删除</Button>

          <Button
            style={[styles.modalBtn, {borderWidth: 0, marginTop: 12 * WidthScale}]}
            textStyle={{fontSize: FontSize }}
            onPress={() => this.delModal.close()}>取消</Button>
        </Modal>
      </NavbarScene>
    )
  }
})

module.exports = CardDetails

const styles = StyleSheet.create({
  count: {
    fontSize: FontSize + 1,
    color: TextYellow,
    marginTop: 10 * WidthScale,
    marginBottom: 10 * WidthScale,
    textAlign: 'right',
    marginRight: 13 * WidthScale
  },
  delModal: {
    height: 200 * WidthScale
  },
  modalInfo: {
    fontSize: FontSize,
    color: TextBlack,
    textAlign: "center",
    marginTop: 30 * WidthScale,
    marginBottom: 30 * WidthScale
  },
  modalBtn: {
    marginLeft: 40 * WidthScale,
    marginRight: 40 * WidthScale,
    height: 40 * WidthScale
  }
})
