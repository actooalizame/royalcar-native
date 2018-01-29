import { Navigation } from 'react-native-navigation';
import Meteor, { connectMeteor } from 'react-native-meteor';
import { registerScreens } from './screens';
Meteor.connect('ws://192.168.1.88:3000/websocket');

registerScreens(); // this is where you register all of your app's screens

const cars = Meteor.subscribe('cars');
// start the app
Navigation.startTabBasedApp({
  appStyle: {
      forceTitlesDisplay: true
    },
  tabs: [
    {
      label: 'Catalogo',
      screen: 'example.CarListContainer', // this is a registered name for a screen
      icon: require('./screens/catalog.png'),
      selectedIcon: require('./screens/catalog.png'), // iOS only
      title: 'Catalogo',

    },
    {
      label: 'Cotizador',
      screen: 'example.Calculator',
      icon: require('./screens/calculator.png'),
      selectedIcon: require('./screens/calculator.png'), // iOS only
      title: 'Locales'
    }
  ]
});