const React = require('react-native')
const { Dimensions, Platform } = React

let{ width, height } = Dimensions.get('window')
let widthScale = width/375
let heightScale = height/667

module.exports = {
  WindowWidth: width,
  WindowHeight: height,
  WidthScale: widthScale,
  HeightScale: heightScale,
  FontSize: 15,
  Red: '#b33e4f',
  Yellow: '#fdf8e2',
  ContainerBackgroundColor: {
    backgroundColor: '#ffffff'
  },
  loadContainer: {

  },
  BorderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0'
  },
  BorderTop: {
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0'
  },
  BorderLeft: {
    borderLeftWidth: 1,
    borderLeftColor: '#e0e0e0'
  },
  BorderRight: {
    borderRightWidth: 1,
    borderRightColor: '#e0e0e0'
  },
  TextColorBlack: {
    opacity: 0.9,
    color: '#262626'
  },
  FlexRow: {
    flexDirection: 'row'
  },
  JustifyContentCenter: {
    justifyContent: 'center'
  },
  JustifyContentBetween: {
    justifyContent: 'space-between'
  },
  AlignItemsCenter: {
    alignItems: 'center'
  },
  Flex1: {
    flex: 1
  },
  NavBodyHeight: {
    height: Platform === 'ios' ? (height - 64) : (height - 44),
  },
  Absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  ButtonStyle: {
    width: 108 * widthScale,
    borderRadius: 50,
    borderWidth: 0,
    height: 32 * widthScale
  },
  ButtonText: {
    fontSize: 14,
    color: "#d7d7d7",
  }
}
