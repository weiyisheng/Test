import React from 'react-native'
import NavigationBar from 'react-native-navbar'

const NavigationNavBar = React.createClass({

  render() {
    return (
      <NavigationBar
        {...this.props}
        statusBar={{hidden: true}}/>
    )
  }
})

module.exports = NavigationNavBar
