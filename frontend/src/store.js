import {
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';

const reducer = combineReducers({
  // Add reducers here
});

const store = configureStore({ reducer });

export default store;
