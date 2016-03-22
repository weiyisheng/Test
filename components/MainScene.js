import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { View, ScrollView } from 'react-native'
import NavigationBar from './common/NavigationBar'
import LiCai from './main/LiCai'
import Wo from './main/Wo'
import ShengHuo from './main/ShengHuo'
import ShouYe from './main/ShouYe'
import CustomTabBar from './main/CustomTabBar'


//constants
import { Flex1 } from '../constants/StyleConstants'

const MainScene = React.createClass({

  render() {

    return (
      <View style={[Flex1]}>
        <NavigationBar
          title={{title: "泸州市商业银行", tintColor: "red"}}
          rightButton={{title: "直销银行"}}
          tintColor={"#e0e0e0"}/>

        <ScrollableTabView
          renderTabBar={() => <CustomTabBar/>}
          tabBarPosition={'bottom'}>
           <ShouYe tabLabel="首页" />
           <LiCai tabLabel="理财" />
           <ShengHuo tabLabel="生活" />
           <Wo tabLabel="我" />
        </ScrollableTabView>

      </View>
    )
  }
})

module.exports = MainScene

const styles = StyleSheet.create({

})
