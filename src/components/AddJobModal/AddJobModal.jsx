import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addJob } from '../../redux/jobsSlice';
import { TextField, Grid } from '@mui/material';
import './AddJobModal.scss';
import { IconContext } from 'react-icons';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { openJobModal } from '../../redux/showModalSlice';

const AddJobModal = () => {
  const newJob = useSelector((state) => state.addJob);
  const state = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const [companyName, setCompanyName] = useState(newJob.companyName);
  const [jobTitle, setJobTitle] = useState(newJob.jobTitle);
  const [salary, setSalary] = useState(newJob.salary);
  const [location, setLocation] = useState(newJob.location);
  const [color, setColor] = useState(newJob.color);
  const [description, setDescription] = useState(newJob.description);
  const [deadline, setDeadline] = useState(newJob.deadline);
  const [dateApplied, setDateApplied] = useState(newJob.dateApplied);
  const [notes, setNotes] = useState(newJob.notes);

  const [contacts, setContacts] = useState(newJob.contacts);
  const [stage, setStage] = useState(newJob.stage);
  const [offer, setOffer] = useState(newJob.offer);
  const [user_id, setUser_id] = useState(newJob.user_id);

  const handleSaveJob = () => {
    dispatch(addJob({ companyName, jobTitle, salary, location, color, description }));
    updateUser();
    dispatch(openJobModal(false));
    setCompanyName('');
    setJobTitle('');
    setSalary('');
    setLocation('');
    setColor('');
    setDescription('');
  };

  const onCloseButtonClick = () => {
    dispatch(openJobModal(false));
  };

  function updateUser() {
    console.log(state)
    fetch('http://localhost:3000/user/update-state', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user_id: state.user.user_id,
        state: JSON.stringify(state),
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('add button res: ', res);
      });
  }

  return (
    <div className='addJobModal' id='modal-overlay'>
      <form className='addJobForm' id='form-modal'>
        <IconContext.Provider value={{ className: 'exit-modal', size: '1.5em' }}>
          <AiOutlineCloseCircle className='clickable' onClick={(e) => onCloseButtonClick()} style={{ color: 'black' }} />
        </IconContext.Provider>
        <h1>Add New Job</h1>
        <Grid container direction='column' justifyContent='space-evenly' alignItems='flex-start' spacing={2} margin='.5rem' gap='1rem'>
          <Grid container item spacing={1} gap='1rem'>
            <TextField
              className='input-field'
              id='company'
              variant='outlined'
              type='text'
              size='small'
              label='Company'
              placeholder='Add Company'
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <TextField
              className='input-field'
              id='jobTitle'
              variant='outlined'
              type='text'
              size='small'
              label='Job Title'
              placeholder='Add Job Title'
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <TextField
              className='input-field'
              id='location'
              variant='outlined'
              type='text'
              size='small'
              label='Location'
              placeholder='Add Location'
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Grid>

          <Grid container item spacing={1} gap='1rem'>
            <TextField
              className='input-field'
              id='salary'
              variant='outlined'
              type='text'
              size='small'
              label='Salary'
              placeholder='Add Salary'
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <TextField
              className='input-field'
              id='color'
              variant='outlined'
              type='text'
              size='small'
              label='Color'
              placeholder='Add Color'
              value={color}
              onChange={(e) => setColor(e.target.value)}
            />
            <TextField
              id='deadline'
              variant='outlined'
              type='text'
              size='small'
              label='Deadline'
              placeholder='Add Deadline'
              value={deadline}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>

          <Grid container item spacing={1} gap='1rem'>
            <TextField
              id='description'
              variant='outlined'
              multiline={true}
              type='text'
              size='small'
              label='Description'
              placeholder='Add Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <TextField
              id='dateApplied'
              variant='outlined'
              type='text'
              size='small'
              label='Date Applied'
              placeholder='Add Date Applied'
              value={dateApplied}
              onChange={(e) => setdateApplied(e.target.value)}
            />
            <TextField
              id='offer'
              variant='outlined'
              type='text'
              size='small'
              label='Offer'
              placeholder='Add Offer'
              value={offer}
              onChange={(e) => setOffer(e.target.value)}
            />
          </Grid>

          <Grid container item spacing={1} gap='1rem'>
            <TextField
              id='notes'
              variant='outlined'
              type='text'
              size='small'
              label='Add Notes'
              placeholder='Add Notes'
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
            <TextField
              id='contacts'
              variant='outlined'
              type='text'
              size='small'
              label='contacts'
              placeholder='Add Contacts'
              value={contacts}
              onChange={(e) => setContacts(e.target.value)}
            />
            <TextField
              id='stage'
              variant='outlined'
              type='text'
              size='small'
              label='stage'
              placeholder='Add Stage'
              value={stage}
              onChange={(e) => setStage(e.target.value)}
            />
          </Grid>
        </Grid>
        <p />
        <br />
        <button className='clickable' type='button' id='save-job' onClick={handleSaveJob} style={{ fontSize: '1.2rem' }}>
          Save Job
        </button>
        <br />
      </form>
    </div>
  );
};

export default AddJobModal;
