import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

import {
  timelineReducer,
  savedTimelineReducer,
} from './timeline/slices';

import mediaReducer from './layout/slices';

const reducer = combineReducers({
  timeline: timelineReducer,
  savedTimeline: savedTimelineReducer,
  isMobile: mediaReducer,
});

const store = configureStore({ reducer });

export default store;
