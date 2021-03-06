import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import weather from './weather';

export default combineReducers({
  routing: routerReducer,
  weather,
});
