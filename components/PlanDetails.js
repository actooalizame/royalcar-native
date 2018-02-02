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



export default class PlanDetails extends Component<{}> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>

        <Text>{this.props.planDetails.showPayment} cuotas de {this.props.planDetails.quotaPrice}</Text>
        <Text>Cuota Sin IVA : {this.props.planDetails.quotaSinIva}</Text>
        <Text>Precio Original : {this.props.car.price}</Text>
        <Text>Cantidad restante a pagar: {this.props.planDetails.remainingPrice}</Text>
        <Text>Valor agregado por financiacion: {this.props.planDetails.interestRate}</Text>
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
  }
});
