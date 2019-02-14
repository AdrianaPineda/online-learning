import data from '../reducers/data';
import modal from '../reducers/modal';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  data,
  modal
})

export default rootReducer