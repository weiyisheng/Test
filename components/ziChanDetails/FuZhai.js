import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import { View, Text, ScrollView } from 'react-native'
import Button from 'apsl-react-native-button'

//constants
import { Flex1, FontSize } from 'Test/constants/StyleConstants'

const FuZhai = React.createClass({

  render() {
    const { navigator } = this.props
    return (
        <ScrollView style={[Flex1]}>
          <View style={{height: 300, width: 3}}>
          </View>

        </ScrollView>
    )
  }
})

module.exports = FuZhai

const styles = StyleSheet.create({

})
