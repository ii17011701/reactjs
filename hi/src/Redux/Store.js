// Store.js
import { createStore } from 'redux';
import cakeReducer from './Reducer';

const store = createStore(cakeReducer);

export default store;