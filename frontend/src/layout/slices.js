import { createSlice } from '@reduxjs/toolkit';

const mediaSlice = createSlice({
  name: 'media',
  initialState: false,
  reducers: {
    setIsMobile: (state, action) => action.payload,
  },
});

export const { setIsMobile } = mediaSlice.actions;

export default mediaSlice.reducer;
