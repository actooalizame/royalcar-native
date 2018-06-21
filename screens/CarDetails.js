import React, { Component } from 'react';
import {StyleSheet,View,Text,Dimensions} from 'react-native';
import {RkButton,RkModalImg,RkText} from 'react-native-ui-kitten';

class CarDetails extends Component {

	/*renderFooter(car){
	  return (
	    <View>
	      <RkText rkType='success large'>{car.brand} - {car.model} - {car.year}</RkText>
	    </View>
	  );
	}*/
  render() {
  	let imageGallery = this.props.imageUrl;
  	console.log((Dimensions.get('window').width)/3)
    return (
      <View style={styles.container}>
        
        <Text>{this.props.car.carName}</Text>
        <View style={styles.gallery}>
          

          <RkModalImg transparent={true} style={styles.imageThumb} modalImgStyle={styles.imageModal} source={{uri: imageGallery[0]}} />
          <RkModalImg style={styles.imageThumb} modalImgStyle={styles.imageModal} source={{uri: imageGallery[1]}} />
          <RkModalImg style={styles.imageThumb} modalImgStyle={styles.imageModal} source={{uri: imageGallery[2]}} />
          
        </View>
        <View style={styles.gallery}>
         <RkModalImg style={styles.imageThumb} modalImgStyle={styles.imageModal} source={{uri: imageGallery[3]}} />
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
    //flex: 1,
    //width: Dimensions.get('window').width,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#CCCCCC',
    flexDirection: 'row',
    marginBottom: 0
    //justifyContent: 'space-between'
  },
  imageThumb: {
    width: (Dimensions.get('window').width)/3,
    height: 107
  },
  imageModal: { 
    height: (Dimensions.get('window').height)/2.3,
    marginTop: (Dimensions.get('window').height)/3.7
  }
});
