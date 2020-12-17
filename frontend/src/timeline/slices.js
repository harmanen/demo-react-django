/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
// ^ Fix later...?
import { createSlice } from '@reduxjs/toolkit';
import { STATE_CODES } from './constants';

// Current state for timeline in app
const timelineSlice = createSlice({
  name: 'timeline',
  initialState: Object.keys(STATE_CODES)[0],
  reducers: {
    setTimelineState: (state, action) => action.payload,
  },
});

export const { setTimelineState } = timelineSlice.actions;
export const timelineReducer = timelineSlice.reducer;

// Current state for timeline that is saved to database
const savedTimelineSlice = createSlice({
  name: 'savedTimeline',
  initialState: null,
  reducers: {
    setSavedTimelineState: (state, action) =>
      action.payload,
  },
});

export const {
  setSavedTimelineState,
} = savedTimelineSlice.actions;

export const savedTimelineReducer =
  savedTimelineSlice.reducer;
