import React, { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

import NavbarScene from 'Test/components/NavbarScene'
import CunDaiTongHeader from 'Test/components/cunDaiTong/CunDaiTongHeader'
import CunDaiTongBox from 'Test/components/cunDaiTong/CunDaiTongBox'

import { WindowWidth, WindowHeight, WidthScale, HeightScale } from 'Test/constants/StyleConstants'
import { ButtonBackgroundColor } from 'Test/constants/colors'
import { TextColorBlack } from 'Test/constants/StyleConstants'

const CunDaiTongScene = React.createClass({

  goToLoan() {

  },
  
  render() {
    return (
      <NavbarScene
          navigator={this.props.navigator}
          title={{title: '存贷通'}}>
        <ScrollView style={styles.scrollViewContainer}>
          <View>
            <CunDaiTongHeader/>
            <CunDaiTongBox/>
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.boxBtn} onPress={this.goToLoan}>
          <Text style={[TextColorBlack,styles.boxBtnText]}>我要贷款</Text>
        </TouchableOpacity>
      </NavbarScene>
    )
  }
})

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: WindowHeight - 50
  },
  boxBtn: {
    position: 'absolute',
    bottom: 0,
    width: WindowWidth,
    height: 50,
    backgroundColor: ButtonBackgroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  boxBtnText: {
    fontSize: 20,
    color: '#e0e0e0'
  }
})

module.exports = CunDaiTongScene
