import React from 'react';
import './SignupPage.scss';
import { TextField, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function SignupPage() {
  return (
    <div className='app'>
    <>
      <div id='login-background'>
        <div id='title-container'>
          <h1>Hiring Helper</h1>
        </div>
      </div>
      <div id='login-parent'>
        <div id='input-container'>
        <Grid container direction='column' spacing={2} justifyContent='center' alignItems='center'>
              <Grid item>
                <TextField variant='outlined' type='text' id='text-username' label='username' placeholder='enter username' size='small'/>
              </Grid>
              <Grid item>
                <TextField variant='outlined' type='text' id='text-password' label='password' placeholder='enter password' size='small' />
              </Grid>
              <Grid item>
                <TextField variant='outlined' type='text' id='text-email' label='email' placeholder='enter email' size='small' />
              </Grid>
                <p />
                <input type='submit' id='submit-button' style={{fontSize: '1.3rem'}} value='Submit'/>
        </Grid> 
        </div>
      </>
    </div>
  );
}

export default SignupPage;
