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
    drop: (state, action) => {
      const {source, destination, target} = action.payload
      const currentIndex = state[source].indexOf(target)
      state[source].splice(currentIndex,1)
      state[destination].push(target)
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment , drop} = jobsSlice.actions;

export default jobsSlice.reducer;
