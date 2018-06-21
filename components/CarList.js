import React, { Component } from 'react';
//import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, StyleSheet,View,Text,Image} from 'react-native';
import {RkCard,rkCardHeader,rkCardContent,rkCardImg,RkButton} from 'react-native-ui-kitten';
import Meteor, { MeteorListView } from 'react-native-meteor';

class CarList extends Component {
  /*static navigationOptions = {
    title: 'Autos',
  };*/

  constructor(props) {
    super(props);
    
  }


 componentWillReceiveProps(props) {
    console.log(props.image);
   // this.setState = {imageUrl: props.image.imageUrl};

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

   getimages(){
      //return this.props.image.imageUrl
      return this.props.image.map((image) =>{
        return <CarFeaturedImage key={image._id} image={image} />
      });
    }

	renderRow(car) {

   
    return (
      <ScrollView style={styles.container}>
        <RkCard rkType='shadowed'>
          <View rkCardHeader>
            <Text>{car.carName}</Text>
            <Text>{this.getimages()}</Text>
            <Image rkCardImg source={{uri: 'http://www.royalcar.cl/wp-content/uploads/2018/04/1-BMW-650i-Coupe.jpg'}}/>
            <View rkCardContent>
              <Text>gika</Text>
            </View>
          </View>
          
        </RkCard>
        

      </ScrollView>
    );
  }

  render() {
    const { carsReady, image } = this.props;

    if (!carsReady) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    return (

      <View style={styles.container}>
        <MeteorListView
          collection="cars"
          style={styles.container}
          /*selector={{status:'iddlee'}}*/
          options={{sort: {createdAt: -1}}}
          renderRow={this.renderRow.bind(this)}
          //extraProp={image.imageUrl}
        />
      </View>
    );
  }

}

export default CarList;

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