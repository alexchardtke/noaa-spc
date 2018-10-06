import { combineReducers } from 'redux';
import nav from './header';
import maps from './maps';
import products from './products';

export default combineReducers({
  nav,
  maps,
  products,
  state: (state = {}) => state
});
