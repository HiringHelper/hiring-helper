import React from 'react';
import './SignupPage.scss';
import { Link } from 'react-router-dom';

function SignupPage() {
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
            <form>
              <label for='username'>Username:</label>
              <input type='text' id='username' name='username'></input>
              <label for='password'>Password:</label>
              <input type='text' id='password' name='password'></input>
              <label for='password'>Email:</label>
              <input type='text' id='email' name='email'></input>
              <input type='submit' value='Submit'></input>
            </form>
            {/* <a className='login-link' href='#'>
              Signup
            </a> */}
            <Link to='/'>Login</Link>
          </div>
        </div>
      </>
    </div>
  );
}

export default SignupPage;
