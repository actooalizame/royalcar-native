import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';

class CarDetails extends Component {
  /*static navigationOptions = {
    title: 'Autos',
  };*/

  render() {

    return (
      <View style={styles.container}>
        
        <Text>Hola</Text>
      </View>
    );
  }

}

export default CarDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
