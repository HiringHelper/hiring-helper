import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user_id: 1,
  user: {},
  Wishlist: [],
  Applied: [
    {
      companyName: 'Chase',
      jobTitle: 'Mid SE',
      salary: '',
      location: '',
      color: '',
      description: '',
      date: '',
      deadline: '',
      dateApplied: '',
      notes: '',
      contacts: '',
      stage: '',
      offer: '',
      user_id: '',
    },
    {
      companyName: 'Facebook',
      jobTitle: 'Sr SE',
      salary: '',
      location: '',
      color: '',
      description: '',
      date: '',
      deadline: '',
      dateApplied: '',
      notes: '',
      contacts: '',
      stage: '',
      offer: '',
      user_id: '',
    },
  ],
  Interview: [
    {
      companyName: 'Netflix',
      jobTitle: 'Jnr SE',
      salary: '',
      location: '',
      color: '',
      description: '',
      date: '',
      deadline: '',
      dateApplied: '',
      notes: '',
      contacts: '',
      stage: '',
      offer: '',
      user_id: '',
    },
  ],
  Offer: [],
  Rejected: [
    {
      companyName: 'LinkedIn',
      jobTitle: '',
      salary: '',
      location: '',
      color: '',
      description: '',
      date: '',
      deadline: '',
      dateApplied: '',
      notes: '',
      contacts: '',
      stage: '',
      offer: '',
      user_id: '',
    },
  ],
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
      state.Wishlist.push({...action.payload});
    },
    updateId: (state, action) => {
      state.user_id = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { drop, addJob, updateId, updateUser } = jobsSlice.actions;

export default jobsSlice.reducer;
