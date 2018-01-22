import { Navigation } from 'react-native-navigation';

import { registerScreens } from './screens';

registerScreens(); // this is where you register all of your app's screens

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
      title: 'Catalogo'
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