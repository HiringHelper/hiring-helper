import React from 'react';
import './SignupPage.scss';
import { TextField, Grid } from '@mui/material';
import {useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';

function SignupPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    const firstName = document.getElementById('text-firstName').value;
    const lastName = document.getElementById('text-lastName').value;
    const email = document.getElementById('text-email').value;
    const password = document.getElementById('text-password').value;

    if (!firstName || !lastName || !email || !password) {
      alert('Please provide all fields');
      return;
    }
    fetch('http://localhost:3000/user/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('update user res: ', res);
        //uncomment this when 
        checkUnique(res);
      });
  }

  function checkUnique(res) {
    //uniqueEmail - boolean
    //user - obj (column titles)
    if (!res.uniqueEmail) {
      alert('The email address provided is already in use');
      return;
    } else {
      //send dispatch to update state with user info
      dispatch(updateUser(res.user));
      
      // add signup dispatch here


      //reroute to home HERE
      console.log('verified');
      navigate('/home')
    }
  }

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
        <Grid id='myGrid' container direction='column' spacing={2} justifyContent='center' alignItems='center'>
              <Grid item>
                <TextField variant='outlined' type='text' id='text-firstName' label='firstName' placeholder='enter first name' size='small'/>
              </Grid>
              <Grid item>
                <TextField variant='outlined' type='text' id='text-lastName' label='lastName' placeholder='enter last name' size='small'/>
              </Grid>
              <Grid item>
                <TextField variant='outlined' type='text' id='text-email' label='email' placeholder='enter email' size='small' />
              </Grid>
              <Grid item>
                <TextField variant='outlined' type='password' id='text-password' label='password' placeholder='enter password' size='small' />
              </Grid>
                <p />
                <input type='submit' id='submit-button' style={{fontSize: '1.3rem'}} value='Submit' onClick={submit}/>
        </Grid>
        </div>
      </div>
      </>
    </div>
  );
}

export default SignupPage;
