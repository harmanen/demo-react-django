import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import timelineReducer from './timeline/slices';
import mediaReducer from './layout/slices';

const reducer = combineReducers({
  timeline: timelineReducer,
  isMobile: mediaReducer,
});

const store = configureStore({ reducer });

export default store;
