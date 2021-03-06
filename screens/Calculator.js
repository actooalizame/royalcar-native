/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {RkButton,RkChoiceGroup,RkChoice,rkType} from 'react-native-ui-kitten';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Calculator extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {selectedPercent: 2};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.selectedPercent}</Text>
        <RkChoiceGroup selectedIndex={2} radio onChange={(index) => this.setState({selectedPercent:index})}>
          <TouchableOpacity choiceTrigger>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <RkChoice rkType='radio'/>
              <Text>Option 1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity choiceTrigger>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <RkChoice rkType='radio'/>
              <Text>Option 2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity choiceTrigger>
            <View style={{flexDirection:'row', alignItems:'center'}}>
              <RkChoice rkType='radio'/>
              <Text>Option 3</Text>
            </View>
          </TouchableOpacity>
        </RkChoiceGroup>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
