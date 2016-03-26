import React from 'react-native'
import { StyleSheet } from 'react-native'

//components
import ScrollableTabView from 'react-native-scrollable-tab-view'
import { View, ScrollView } from 'react-native'
import NavigationBar from 'Test/components/common/NavigationBar'
import LiCai from 'Test/components/main/LiCai'
import Wo from 'Test/components/main/Wo'
import ShengHuo from 'Test/components/main/ShengHuo'
import ShouYe from 'Test/components/main/ShouYe'
import CustomTabBar from 'Test/components/main/CustomTabBar'
import NavbarScene from 'Test/components/NavbarScene'

//constants
import { Flex1 } from 'Test/constants/StyleConstants'
import { ShouYeNavBack } from 'Test/constants/colors'

const MainScene = React.createClass({

  render() {
    let { navigator } = this.props

    return (
      <NavbarScene
        navigator={this.props.navigator}
        leftButton={{disabled: true}}
        title={{title: "泸州市商业银行", tintColor: "red"}}
        rightButton={{title: "直销银行"}}
        barColor={ShouYeNavBack}>

        <ScrollableTabView
          renderTabBar={() => <CustomTabBar/>}
          tabBarPosition={'bottom'}>
           <ShouYe tabLabel="首页" navigator={navigator}/>
           <LiCai tabLabel="理财" />
           <ShengHuo tabLabel="生活" />
           <Wo tabLabel="我" />
        </ScrollableTabView>

      </NavbarScene>
    )
  }
})

module.exports = MainScene

const styles = StyleSheet.create({

})
