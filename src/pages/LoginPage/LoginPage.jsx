import React from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom'
const navigation = useNavigation();

function LoginPage() {
  const navigate = useNavigate()


  const handleSubmit = () => {

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
          <Link to='signup'>Signup</Link>

          <Link to='home'>To Home</Link>
        </div>
      </div>
    </>
    </div>
  );
}

export default LoginPage;
