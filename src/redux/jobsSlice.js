import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = jobsSlice.actions;

export default jobsSlice.reducer;
