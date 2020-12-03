import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import timelineReducer from './timeline/slices';

const reducer = combineReducers({
  timeline: timelineReducer,
});

const store = configureStore({ reducer });

export default store;
