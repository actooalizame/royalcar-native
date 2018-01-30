import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {RkButton,RkChoiceGroup,RkChoice,rkType} from 'react-native-ui-kitten';

export default class ChoiceGroup extends Component{
  constructor(props) {
    super(props);
    this.state = {selectedPercent: 1};
    console.log(props)
  }

  render(){
    return(
      <RkChoiceGroup selectedIndex={1} radio onChange={(index) => this.setState({selectedPercent:index})}>
        <TouchableOpacity choiceTrigger>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <RkChoice rkType='radio'/>
            <Text>25%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity choiceTrigger>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <RkChoice rkType='radio'/>
            <Text>50%</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity choiceTrigger>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <RkChoice rkType='radio'/>
            <Text>70%</Text>
          </View>
        </TouchableOpacity>
      </RkChoiceGroup>
      )
  }
}
