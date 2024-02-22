import { combineReducers } from 'redux';
import addCart from '../reducers/addCart.js';

const rootReducers = combineReducers({
   postAdded: addCart,
})

export default rootReducers;
