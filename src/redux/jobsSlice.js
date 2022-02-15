import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Wishlist: ['Chase', 'Facebook'],
  Applied: [],
  Interview: ['Netflix'],
  Offer: [],
  Rejected: ['LinkedIn'],
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    drop: (state, action) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment } = jobsSlice.actions;

export default jobsSlice.reducer;
