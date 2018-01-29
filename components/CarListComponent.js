import React, { Component } from 'react';
//import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { ScrollView, StyleSheet,View,Text,Image} from 'react-native';
import {RkCard,rkCardHeader,rkCardContent,rkCardImg,RkButton} from 'react-native-ui-kitten';
import Meteor, { connectMeteor, MeteorListView } from 'react-native-meteor';

class CarListComponent extends Component {
  /*static navigationOptions = {
    title: 'Autos',
  };*/

  componentWillReceiveProps(props) {
    //console.log(navigatory); // i get the right data!
    //console.log(this.props); // empty array >_<
    viewDetails = () => {
      props.navigator.push({
        screen: 'example.CarDetails',
        title: 'hola'
      });
    }
  }

	renderRow(car,props) {
    //console.log(props);
    
    return (
      <ScrollView style={styles.container}>
        <RkCard rkType='shadowed'>
          <View rkCardHeader>
            <Text>{car.name}</Text>
          </View>
          <Image rkCardImg source={{uri: 'http://merchandiser-szcel9eb49h.stackpathdns.com/wp-content/uploads/2016/09/hv1-ch.jpg'}}/>
          <View rkCardContent>
            <Text> quick brown fox jumps over the lazy dog</Text>
          </View>
          <View rkCardFooter>
            <RkButton rkType='small' onPress={this.viewDetails}>ver</RkButton>
          </View>
        </RkCard>
        

      </ScrollView>
    );
  }

  render() {
    const { carsReady, navigatory } = this.props;
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
          renderRow={this.renderRow}
          {...navigatory}
        />
      </View>
    );
  }

}

export default CarListComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1
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