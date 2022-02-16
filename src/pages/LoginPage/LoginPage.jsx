import React from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom'
import { TextField, Grid } from '@mui/material'

function LoginPage() {
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
          <form>
            <label for='fname'>Username:</label>
            <TextField type='text' variant='standard' id='field' name='fname' />
            <br />
            <br />
            <label for='lname'>Password:</label>
            <TextField type='text' variant='standard' id='field' name='lname' />
            <br />
            <br />
            <input type='submit' id='submit-button' style={{fontSize: '1.3rem'}} value='Submit'></input>
          </form>
          <div id='login-link'>
          <Link to='signup'>Signup</Link>
          <p />
          <Link to='home'>To Home</Link>
          </div>
        </div>
      </div>
    </>
    </div>
  );
}

export default LoginPage;
