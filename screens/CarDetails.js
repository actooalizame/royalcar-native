import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {RkButton,RkModalImg,RkText} from 'react-native-ui-kitten';

class CarDetails extends Component {

	renderFooter(car){
	  return (
	    <View>
	      <RkText rkType='success large'>{car.brand} - {car.model} - {car.year}</RkText>
	    </View>
	  );
	}
  render() {
  	let imageGallery = this.props.car.images.gallery;
  	let car = this.props.car;
  	
    return (
      <View style={styles.container}>
        
        <Text>{this.props.car.name}</Text>
        <Text>{this.props.car.price}</Text>
        <Text>{this.props.car.year}</Text>
        <Text>{this.props.car.km}</Text>
        <Text>{this.props.car.brand}</Text>
        <Text>{this.props.car.model}</Text>
        <Text>{this.props.car.equipment}</Text>
        <Text>{this.props.car.color}</Text>
        <Text>{this.props.car.interior}</Text>
        <Text>{this.props.car.roof}</Text>
        <Text>{this.props.car.security}</Text>
        <View style={styles.gallery}>
          <RkModalImg renderFooter={() => this.renderFooter(car)} source={{uri: this.props.car.images.single}}/>
          <RkModalImg source={{uri: imageGallery[0]}} />
  				<RkModalImg source={{uri: imageGallery[1]}}/>
        </View>

      </View>
    );
  }

}

export default CarDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gallery: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#CCCCCC',
    flexDirection: 'row',
    //justifyContent: 'space-between'
  }
});
