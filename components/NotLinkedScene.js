import React from 'react-native'
import { View, Text, StyleSheet, Platform } from 'react-native'

//components
import Loading from 'Test/components/common/Loading'
import NoCountScene from 'Test/components/notLinked/NoCountScene'
import HasCountScene from 'Test/components/notLinked/HasCountScene'

//constants
import { Flex1, ContainerBackgroundColor } from 'Test/constants/StyleConstants'
import { SCENE_TAG_NO_COUNT, SCENE_TAG_HAS_COUNT } from 'Test/constants/NormalConstants'


const MainScene = React.createClass({

  getInitialState() {
    return {
      fetchLoading: false,
      sceneTag: SCENE_TAG_NO_COUNT
    }
  },

  render() {
    let { fetchLoading, sceneTag } = this.state

    return (
      <View style={[Flex1]}>
        {
          (() => {
            if(fetchLoading) {
              return (
                <Loading styles={ContainerBackgroundColor}/>
              )
            } else {

              if(sceneTag === SCENE_TAG_NO_COUNT) {
                return (
                  <NoCountScene />
                )
              } else if(sceneTag === SCENE_TAG_HAS_COUNT){
                return (
                  <HasCountScene />
                )
              } else {
                return (
                  <View />
                )
              }
            }
          })()
        }
      </View>
    )
  }
})


module.exports = MainScene

const styles = StyleSheet.create({

})
