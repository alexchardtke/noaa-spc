import { combineReducers } from 'redux';
import maps from './maps';
import products from './products';

export default combineReducers({
  maps,
  products,
  state: (state = {}) => state
});
