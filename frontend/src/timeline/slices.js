import { createSlice } from '@reduxjs/toolkit';
import { STATE_CODES } from './constants';

const timelineSlice = createSlice({
  name: 'timeline',
  initialState: Object.keys(STATE_CODES)[0],
  reducers: {
    setTimelineState: (state, action) => action.payload,
  },
});

export const { setTimelineState } = timelineSlice.actions;

export default timelineSlice.reducer;
