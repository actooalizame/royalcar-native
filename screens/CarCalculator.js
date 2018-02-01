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
    this.state = {showPercent: 1};
    this.state = {showPayment: null};
    this.state = {selectedIndex: null};
    this.state = {selectedIndexPay: null};
    this.handlePercent = this.handlePercent.bind(this);
    this.handlePayment = this.handlePayment.bind(this);
    this.calculatePlan = this.calculatePlan.bind(this);
  }

  handlePercent=function(index,props){
    this.state.selectedPercent=index;
    const price = parseInt(this.props.car.price);

    if(index===0){
      let calculatedPercent = parseInt (price*0.25),
          remainingPrice = price - calculatedPercent,
          formated = calculatedPercent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          result = ("$ " + formated);
      this.setState({showPercent:result,selectedIndex:index,remainingPrice:remainingPrice});
    }
    if(index===1){
      let calculatedPercent = parseInt (price*0.5),
          remainingPrice = price - calculatedPercent,
          formated = calculatedPercent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          result = ("$ " + formated);
      this.setState({showPercent:result,selectedIndex:index,remainingPrice:remainingPrice});
    }
    if(index===2){
      let calculatedPercent = parseInt (price*0.7),
          remainingPrice = price - calculatedPercent,
          formated = calculatedPercent.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
          result = ("$ " + formated);
      this.setState({showPercent:result,selectedIndex:index,remainingPrice:remainingPrice});
    }
  };
  handlePayment=function(index,props){
    this.state.selectedPayment=index;
    const price = parseInt(this.props.car.price);
    let {remainingPrice} = this.state;

    if(index===0){
      const interestRate = price * 0.075;
      this.setState({showPayment:3,selectedIndexPay:index,interestRate:interestRate});
    }
    if(index===1){
      const interestRate = price * 0.15;
      this.setState({showPayment:6,selectedIndexPay:index,interestRate:interestRate})
    }
    if(index===2){
      const interestRate = price * 0.3;
      this.setState({showPayment:12,selectedIndexPay:index,interestRate:interestRate})
    }
  };

  calculatePlan=function(){
    const price = parseInt(this.props.car.price);
    let {showPayment,remainingPrice,interestRate} = this.state;
    let quotaSinIva = (remainingPrice / showPayment);
    let quotaPrice = ((remainingPrice+interestRate)/showPayment);

    console.log("Valor agregado por financiacion: " + interestRate);
    console.log("Cuota sin IVA " + quotaSinIva);
    console.log("Valor de Cuota " + quotaPrice);
  }
  
  render() {
    let { showPercent,showPayment,selectedIndex,selectedIndexPay,remainingPrice } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <Text>Precio Total: {this.props.car.price}</Text>
          <Text>{showPercent ?
            "Valor del pie:" + showPercent : "Elige porcentaje del Pie Adelanto"
          }</Text>
          <Text>Valor Restante: {remainingPrice}</Text>
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
          <RkChoiceGroup radio selectedIndex={selectedIndexPay} onChange={(index) => this.handlePayment(index)}>
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
        <RkButton rkType='success'  onPress={() => this.calculatePlan()}>Calcular</RkButton>
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
