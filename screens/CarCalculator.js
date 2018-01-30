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
    this.state = {showPercent: 0};
    this.state = {showPayment: null};
    this.handlePercent = this.handlePercent.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
  }

  handlePercent=function(index,props){
    this.state.selectedPercent=index;
    const price = this.props.car.price;
    if(this.state.selectedPercent===0){
      let calculated = parseInt (price*0.25);
      let formated = calculated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let result = ("$ " + formated);
      this.setState({showPercent:result,selectedIndex:this.state.selectedPercent})
    }
    if(this.state.selectedPercent===1){
      let calculated = parseInt (price*0.5);
      let formated = calculated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let result = ("$ " + formated);
      this.setState({showPercent:result,selectedIndex:this.state.selectedPercent})
    }
    if(this.state.selectedPercent===2){
      let calculated = parseInt (price*0.7);
      let formated = calculated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      let result = ("$ " + formated);
      this.setState({showPercent:result,selectedIndex:this.state.selectedPercent})
    }
  };
  handlePayment=function(index1,props){
    this.state.selectedPayment=index1;
    const price = this.props.car.price;
    if(this.state.selectedPayment===0){
      
      this.setState({showPayment:"3",selectedIndexPay:this.state.selectedPayment})
    }
    if(this.state.selectedPayment===1){
      
      this.setState({showPayment:"6",selectedIndexPay:this.state.selectedPayment})
    }
    if(this.state.selectedPayment===2){
      
      this.setState({showPayment:"12",selectedIndexPay:this.state.selectedPayment})
    }
  };
  /*handlePayment(index){
    this.setState({selectedPayment:index})
  }*/
  
  render() {

    let showPercent = this.state.showPercent;
    let showPayment = this.state.showPayment;
    let selectedIndex = this.state.selectedIndex;
    let selectedIndexPay =  this.state.selectedIndexPay;
    return (
      <View style={styles.container}>
        <View>
          <Text>{showPercent ?
            "Valor del pie:" + showPercent : "Elige porcentaje del Pie Adelanto"
          }</Text>
          <RkChoiceGroup radio selectedIndex={selectedIndex} onChange={(index) => this.handlePercent(index)}>
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

        <View>
          <Text>{showPayment ?
             "Numero de Cuotas:" + showPayment : "Elige numero de cuotas"
          }</Text>
          <RkChoiceGroup radio selectedIndex={selectedIndexPay} onChange={(index1) => this.handlePayment(index1)}>
            <TouchableOpacity choiceTrigger>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <RkChoice rkType='radio'/>
                <Text>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity choiceTrigger>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <RkChoice rkType='radio'/>
                <Text>6</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity choiceTrigger>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <RkChoice rkType='radio'/>
                <Text>12</Text>
              </View>
            </TouchableOpacity>
          </RkChoiceGroup>
        </View>

        
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
