import React, { Component } from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
import CarFeaturedImage from '../../components/CarListComponent';

export default CarFeaturedImageContainer = createContainer(props => {

    //const imageHandle = Meteor.subscribe('images.onlyOne');
    return {
        /*carsReady: carsHandle.ready(),
        imageReady: imageHandle.ready(),
        image: Meteor.collection('carImages').findOne({}, {sort: {createdAt: -1}})*/
        caName: 'hola'
    };
 }, CarFeaturedImage);

//playing: Meteor.collection('currentSongs').findOne({}, {sort: {createdAt: -1}})