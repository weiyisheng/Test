import React from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { WidthScale } from 'Test/constants/StyleConstants'
import { TextBlack } from 'Test/constants/colors'
const Cell = React.createClass({

  render() {
    let { left, middle, right, leftStyle,
      middleStyle, rightStyle, style } = this.props

    let l = left ?
      (left.text ? <Text style={[styles.cellText, leftStyle]}>{left.text}</Text> : left) :
      <View />

    let r = right ?
      (right.text ? <Text style={[styles.cellText, rightStyle]}>{right.text}</Text> : right) :
      <View />

    let m = middle ?
      (middle.text ? <Text style={[styles.cellText, middleStyle]}>{middle.text}</Text> : middle) :
      <View />

    return (
      <View style={[styles.cell, style]}>
        {l}
        {m}
        {r}
      </View>
    )
  }
})

const styles = StyleSheet.create({
  cell: {
    marginBottom: 15 * WidthScale,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cellText: {
    fontSize: 13,
    color: TextBlack,
    marginRight: 13 * WidthScale,
    marginLeft: 13 * WidthScale
  }
})

module.exports = Cell
