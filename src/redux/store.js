import { configureStore } from '@reduxjs/toolkit';
import addJobSlice from './addJobSlice';
import jobsSlice from './jobsSlice';
import showModalSlice from './showModalSlice';

export const store = configureStore({
  reducer: {
    jobs: jobsSlice,
    addJob: addJobSlice,
    modals: showModalSlice
  },
});
