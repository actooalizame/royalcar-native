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


export default class CarCalculator extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {selectedPercent: 1};
  }

  setUpfrontPrice = () => {
    const selectedPercent = this.state.selectedPercent,
          price = this.props.car.price;

    switch (selectedPercent) {
    case 0:
        let calculated = parseInt (price*0.25);
        let formated = calculated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return("$ " + formated)
        break;
    case 1:
        let calculated1 = parseInt (price*0.5);
        let formated1 = calculated1.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return("$ " + formated1)
        break;
     case 2:
        let calculated2 = parseInt (price*0.7);
        let formated2 = calculated2.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return("$ " + formated2)
        break;
    default:
        // execute default code block
    }
  }
  handlePercent(index){
    this.setState({selectedPercent:index})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Valor del pie: {this.setUpfrontPrice()}</Text>
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
