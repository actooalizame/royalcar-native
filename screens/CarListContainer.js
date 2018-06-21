import React, { Component } from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
import CarListComponent from '../components/CarListComponent';
import CarList from '../components/CarList';

export default CarListContainer = createContainer(props => {

    const carsHandle = Meteor.subscribe('cars.all');
   	//const imageHandle = Meteor.subscribe('images.onlyOne');
    Meteor.subscribe('images.all');
    return {
        carsReady: carsHandle.ready(),
        //imageReady: imageHandle.ready(),
       // image: Meteor.collection('carImages').findOne({}, {sort: {createdAt: -1}})
    };
 }, CarListComponent);

//playing: Meteor.collection('currentSongs').findOne({}, {sort: {createdAt: -1}})