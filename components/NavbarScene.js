import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, Image, TouchableOpacity } from 'react-native'
import NavigationBar from 'Test/components/common/NavigationBar'
//constants
import { Flex1, ContainerBackgroundColor, FontSize } from 'Test/constants/StyleConstants'
import { TextBlack, NavbarBack } from 'Test/constants/colors'


const NavbarScene = React.createClass({

  renderLeftButton() {
    const { navigator } = this.props

    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
          <View style={[styles.button]}>
            <Image source={require('Test/res/navBackIcon.png')}/>
            <Text style={[styles.buttonText]}>返回</Text>
          </View>
        </TouchableOpacity>
    )
  },

  render() {
    const { style, barColor, title, leftButton,
      rightButton, navigator } = this.props

    const left = leftButton ? (leftButton.disabled ? <View /> : leftButton)
      : this.renderLeftButton()

    const rigth = rightButton ? rightButton
      : <View />
    const backColor = barColor ? barColor : NavbarBack

    return (
      <View style={[Flex1, ContainerBackgroundColor, style]}>
        <NavigationBar
          title={title}
          leftButton={left}
          rightButton={rigth}
          tintColor={backColor}/>

          {this.props.children}

      </View>
    )
  }
})

module.exports = NavbarScene

const styles = StyleSheet.create({
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
