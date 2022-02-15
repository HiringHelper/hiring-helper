import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  companyName: '',
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
  user_id: ''
};

export const addJobSlice = createSlice({
  name: 'addJob',
  initialState,
  reducers: {
    addJob: (state, action) => {
      const { companyName, jobTitle, salary, location, color, description, date, deadline, dateApplied, notes, contacts, stage, offer, user_id } = action.payload;
      state.companyName += companyName;
      state.jobTitle += jobTitle;
      state.salary += salary;
      state.location += location;
      state.color += color;
      state.description += description;
      state.date += date;
      state.deadline += deadline;
      state.dateApplied += dateApplied;
      state.notes += notes;
      state.contacts += contacts;
      state.stage += stage;
      state.offer += offer;
      state.user_id += user_id;

    }
  },
});

// Action creators are generated for each case reducer function
export const { addJob } = addJobSlice.actions;

export default addJobSlice.reducer;
