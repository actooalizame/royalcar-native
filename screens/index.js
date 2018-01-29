import { Navigation } from 'react-native-navigation';

import CarListContainer from './CarListContainer';
import Calculator from './Calculator';
import CarDetails from './CarDetails';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.CarListContainer', () => CarListContainer);
  Navigation.registerComponent('example.Calculator', () => Calculator);
  Navigation.registerComponent('example.CarDetails', ()=> CarDetails);
}