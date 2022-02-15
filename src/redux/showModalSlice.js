import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  jobModal: null
};

export const showModalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openJobModal: (state, action) => {
      console.log('in showmodalSlice, this is action:' ,action.payload)
      state.jobModal = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { openJobModal } = showModalSlice.actions;

export default showModalSlice.reducer;
