import React, { Component } from 'react';
import Meteor , {createContainer} from 'react-native-meteor';
import CarListComponent from '../components/CarListComponent';

Meteor.connect('ws://192.168.1.82:3000/websocket');

export default CarListContainer = createContainer(props => {
    const carsHandle = Meteor.subscribe('cars');
    return {
        carsReady: carsHandle.ready()
    };
 }, CarListComponent);