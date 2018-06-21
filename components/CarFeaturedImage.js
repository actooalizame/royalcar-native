import React, { Component } from 'react';
import {StyleSheet,View,Text} from 'react-native';
import {RkButton,RkModalImg,RkText} from 'react-native-ui-kitten';
import Meteor from 'react-native-meteor';

class CarFeaturedImage extends Component {

  constructor(props) {
    super(props);
  };


  render() {
  
  	
    return (
      <View style={styles.container}>
        
        <Text>{this.props.carName}</Text>
      

      </View>
    );
  }

}

export default CarFeaturedImage;

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
