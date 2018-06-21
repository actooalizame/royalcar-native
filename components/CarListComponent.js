import React, { Component } from 'react';
//import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, StyleSheet,View,Text,Image} from 'react-native';
import {RkCard,rkCardHeader,rkCardContent,rkCardImg,RkButton} from 'react-native-ui-kitten';
import Meteor, { MeteorComplexListView } from 'react-native-meteor';

import CarFeaturedImageContainer from '../screens/containers/CarFeaturedImageContainer';
import CarFeaturedImage from './CarFeaturedImage';

class CarListComponent extends Component {
  /*static navigationOptions = {
    title: 'Autos',
  };*/

 componentWillReceiveProps(props) {
    viewDetails = (car) => {
      props.navigator.push({
        screen: 'example.CarDetails',
        title: car.name,
        passProps: {car},
        //screenBackgroundColor: '#fff',
        animationType: 'slide-horizontal'
      });
    }
    calculateCar = (car) => {
      props.navigator.push({
        screen: 'example.CarCalculator',
        title: car.name,
        passProps: {
            car,
            navProps: props
          },
        //screenBackgroundColor: '#fff',
        animationType: 'slide-horizontal'
      });
    }
  }


	renderRow(car) {
   const imageUrl = car.image.map(function(a) {return a.imageUrl;});
   const carImg = imageUrl[0]
  
    return (
      <ScrollView style={styles.container}>
        <RkCard rkType='shadowed'>
          <View rkCardHeader>
            <Text>{car.carName}</Text>
          </View>
          <Image rkCardImg source={{uri: carImg}}/>
          <View rkCardContent>
            <Text>{car.slug}</Text>
          </View>
          <View rkCardFooter>
            <RkButton rkType='small'  onPress={() => this.viewDetails(car)}>Ver</RkButton>
            <RkButton rkType='small success'  onPress={() => this.calculateCar(car)}>Cotizar</RkButton>
          </View>
        </RkCard>
        

      </ScrollView>
    );
  }

  render() {
    const { carsReady } = this.props;
    if (!carsReady) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>


        <MeteorComplexListView
          elements={()=>{
            return Meteor.collection('cars').find().map((car) => {
              const image = Meteor.collection('carImages').find({carName: car.carName}, {sort: {createdAt: 1}});
             return {
               ...car,
               image
             };
            })
          }}
          renderRow={this.renderRow}
        />


      </View>
    );
  }

}

export default CarListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff'
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC'
  },
  row: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#CCCCCC',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  rowText: {
    fontSize: 16
  },
  deleteText: {
    color: 'red',
    fontWeight: '700'
  }
});