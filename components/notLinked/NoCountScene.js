import React from 'react-native'
import { View, Text, StyleSheet, Image, TouchableOpacity,
  Platform } from 'react-native'

//compoennts
import Loading from 'Test/components/common/Loading'
import NavigationBar from 'Test/components/common/NavigationBar'

//constants
import { Flex1, JustifyContentCenter, AlignItemsCenter,
  NavBody, TextColorBlack, WindowHeight, WindowWidth, Absolute,
  HeightScale, ContainerBackgroundColor, Red, FontSize } from 'Test/constants/StyleConstants'
import { SCENE_TAG_NO_COUNT, SCENE_TAG_HAS_COUNT } from 'Test/constants/NormalConstants'

import { BeginRequestUserInfoMesage } from 'Test/dataModle/dataModel'


const NoCountScene = React.createClass({

  render() {
    let statusBar = {hidden: false}
    if(Platform.OS === 'android') {
      statusBar.hidden = true
    }
    return (
      <View style={[Flex1, ContainerBackgroundColor]}>
        <NavigationBar
        title={{title: "未关联资产账户"}}
        statusBar={statusBar}/>
        <View style={[Absolute, JustifyContentCenter,
            AlignItemsCenter, styles.body]}>
          <Image source={require('Test/res/relevance_property_ic_succeed.png')}/>
          <Text style={[styles.infoText]}>
            您的行内资产都已添加成功</Text>
          <Text style={[styles.helpText, { marginTop: 16 * HeightScale}]}>
            如需了解账户详情，请点击查看</Text>
          <Text style={[styles.helpText, { marginTop: 7 * HeightScale}]}>首页>资产详情</Text>

          <TouchableOpacity onPress={() => BeginRequestUserInfoMesage(1, (result) => console.log("ous siade result : ",result))}>
            <View style={[styles.knowBtnBox]}>
              <Text style={[styles.knowBtnText]}>知道了</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
})


module.exports = NoCountScene

const styles = StyleSheet.create({
  body: {
    height: WindowHeight,
    width: WindowWidth,
  },
  infoText: {
    marginTop: 34 * HeightScale,
    fontSize: (FontSize + 6) * HeightScale,
    textAlign: "center"
  },
  helpText: {
    fontSize: (FontSize + 2) * HeightScale,
    color: "#a0a0a0",
    textAlign: "center"
  },
  knowBtnBox: {
    borderColor: Red,
    borderWidth: 1,
    borderRadius: 50,
    paddingLeft: 85 * HeightScale,
    paddingTop: 14 * HeightScale,
    paddingBottom: 14 * HeightScale,
    paddingRight: 85 * HeightScale,
    marginTop: 76 * HeightScale
  },
  knowBtnText: {
    fontSize: (FontSize + 2) * HeightScale,
    color: Red
  }
})
