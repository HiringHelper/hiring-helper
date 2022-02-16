import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  Wishlist: [],
  Applied: [],
  Interview: [],
  Offer: [],
  Rejected: [],
};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    drop: (state, action) => {
      const source = action.payload.source;
      const destination = action.payload.destination;
      const [card] = state[source.droppableId].splice(source.index, 1);
      state[destination.droppableId].splice(destination.index, 0, card);
    },
    addJob: (state, action) => {
      console.log(state.Wishlist);
      state.Wishlist.push({...action.payload});
    },
    updateState: (state, action) => {
      for(const key in action.payload){
        state[key] = action.payload[key]
      }
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { drop, addJob, updateState, updateUser } = jobsSlice.actions;

export default jobsSlice.reducer;
