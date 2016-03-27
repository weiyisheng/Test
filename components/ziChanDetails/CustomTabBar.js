'use strict';

var React = require('react-native');
var {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
  Image,
  Platform
} = React;

var deviceWidth = Dimensions.get('window').width;

import { FontSize, FlexRow, JustifyContentCenter,
  AlignItemsCenter, WidthScale } from 'Test/constants/StyleConstants'
import { TextBlack, NavbarBack, TextRed } from 'Test/constants/colors'

var DefaultTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array
  },

  renderTabOption(name, page) {
    var isTabActive = this.props.activeTab === page;
    let borderB = {}
    if(isTabActive) {
      borderB = {
        borderBottomWidth: 4,
        borderBottomColor: TextRed
      }
    }

    return (
      <TouchableOpacity
        style={[JustifyContentCenter, AlignItemsCenter, borderB, styles.tab]}
        key={name}
        onPress={() => this.props.goToPage(page)}>
          <Text style={{color: isTabActive ? TextRed : TextBlack,
                        fontWeight: isTabActive ? 'bold' : 'normal',
                        opacity: isTabActive ? 1 : 0.8,
                        fontSize: 16}}>{name}</Text>
      </TouchableOpacity>
    );
  },

  renderLeftButton() {
    const { navigator } = this.props

    return (
      <TouchableOpacity onPress={() => navigator.pop()} style={{position: 'absolute', left: 0, bottom: 12 * WidthScale}}>
          <View style={[styles.button]}>
            <Image source={require('Test/res/navBackIcon.png')}/>
            <Text style={[styles.buttonText]}>返回</Text>
          </View>
        </TouchableOpacity>
    )
  },

  render() {
    let { style } = this.props
    var numberOfTabs = this.props.tabs.length;
    // var tabUnderlineStyle = {
    //   position: 'absolute',
    //   width: deviceWidth / (1.8 * numberOfTabs),
    //   marginLeft: 20*deviceWidth/375,
    //   height: 3,
    //   backgroundColor: '#D11E10',
    //   bottom: 0,
    // };
    //
    // var left = this.props.scrollValue.interpolate({
    //   inputRange: [0, 1], outputRange: [0, deviceWidth / numberOfTabs]
    // });

  // <Animated.View style={[tabUnderlineStyle, {left}]} />
    let barHeight = {}
    if(Platform.OS === "android") {
      barHeight = {height: 44}
    }
    return (
      <View style={[AlignItemsCenter, styles.cot, barHeight, style]}>
        {this.renderLeftButton()}
        <View style={[FlexRow, styles.tabBox]}>
          {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        </View>
      </View>
    );
  },
});

module.exports = DefaultTabBar

var styles = StyleSheet.create({
  cot: {
    paddingTop: 20,
    height: 64,
    backgroundColor: NavbarBack,
    justifyContent: "flex-end"
  },
  tab: {
    width: 80 * WidthScale,
    paddingBottom: 9 * WidthScale
  },
  button: {
    width: 60,
    paddingLeft: 8,
    flexDirection: "row",
    paddingTop: 4
  },
  buttonText: {
    fontSize: FontSize,
    color: TextBlack,
    alignSelf: "center",
    paddingLeft: 8
  }
})
