import { Navigation } from 'react-native-navigation';

import CarListContainer from './CarListContainer';
import Calculator from './Calculator';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.CarListContainer', () => CarListContainer);
  Navigation.registerComponent('example.Calculator', () => Calculator);
}