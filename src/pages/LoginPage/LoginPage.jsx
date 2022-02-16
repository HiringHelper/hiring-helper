import React from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../redux/jobsSlice';

function LoginPage() {
  const dispatch = useDispatch();

  function submit(e) {
    e.preventDefault();
    const form = document.getElementById('myform');
    if (!form.email.value || !form.password.value) {
      alert('Please enter both fields');
      return;
    }
    fetch('http://localhost:3000/user/verify-user', {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({
        email: 'idan',
        password: 'idan1234',
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


    }
  }

  return (
    <div className='app'>
      <>
        <div id='login-background'>
          <div id='title-container'>
            <h1>App Name</h1>
          </div>
        </div>
        <div id='login-parent'>
          <div id='input-container'>
            <form id='myform'>
              <label for='email'>Email:</label>
              <input type='text' id='email' name='email'></input>
              <br />
              <br />
              <label for='password'>Password:</label>
              <input type='password' id='password' name='password'></input>
              <br />
              <br />
              <input type='submit' value='Submit' form='myform' onClick={submit}></input>
            </form>
            <Link to='signup'>Signup</Link>

            <Link to='home'>To Home</Link>
          </div>
        </div>
      </>
    </div>
  );
}

export default LoginPage;
