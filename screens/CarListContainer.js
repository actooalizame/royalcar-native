import React, { Component } from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
import CarListComponent from '../components/CarListComponent';


export default CarListContainer = createContainer(props => {

    const carsHandle = Meteor.subscribe('cars');
    return {
        carsReady: carsHandle.ready(),

    };
 }, CarListComponent);