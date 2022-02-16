import React from 'react';
import './LoginPage.scss';
import { Link, useNavigate } from 'react-router-dom'
import { TextField, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/jobsSlice';

function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function submit(e) {
    console.log('hello')
    e.preventDefault();
    const form = document.getElementById('myform');
    if (!form.email.value || !form.password.value) {
      alert('Please enter both fields');
      return;
    }
    fetch('http://localhost:3000/user/verify-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email.value,
        password: form.password.value,
      }),
    })
      .then((data) => data.json())
      .then((res) => {
        console.log('update user res: ', res);
        //uncomment this when 
        checkVerified(res);
      });
  }

  function checkVerified(res) {
    //verified - boolean
    //user - obj (column titles)
    if (!res.verified) {
      alert('Incorrect user info, please try again');
      return;
    } else {
      //send dispatch to update state with user info
      dispatch(updateUser(res.user));
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
          <form id='myform'>
            <label for='email'>Email:</label>
            <TextField type='text' variant='standard' id='field' name='email' />
            <br />
            <br />
            <label for='password'>Password:</label>
            <TextField type='password' variant='standard' id='field' name='password' />
            <br />
            <br />
            <input type='submit' id='submit-button' style={{fontSize: '1.3rem'}} value='Log In' onClick={submit}></input>
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
