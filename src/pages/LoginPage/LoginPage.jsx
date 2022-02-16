import React from 'react';
import './LoginPage.scss';

function LoginPage() {
  return (
    <>
      <div id='login-background'>
        <div id='title-container'>
          <h1>App Name</h1>
        </div>
      </div>
      <div id='login-parent'>
        <div id='input-container'>
          <form>
            <label for='fname'>Username:</label>
            <input type='text' id='fname' name='fname'></input>
            <br />
            <br />
            <label for='lname'>Password:</label>
            <input type='text' id='lname' name='lname'></input>
            <br />
            <br />
            <input type='submit' value='Submit'></input>
          </form>
          <a className='login-link' href='#'>Signup</a>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
