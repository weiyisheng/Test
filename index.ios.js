/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import MainScene from './components/MainScene'

class Test extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{component: MainScene}}
        renderScene={(route, navigator) => {
          return <route.component navigator={navigator}/>
        }}/>
    );
  }
}

const styles = StyleSheet.create({
});

AppRegistry.registerComponent('Test', () => Test);
