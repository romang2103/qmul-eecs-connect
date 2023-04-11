import logo from '../../assets/logo2.png';
import './login.css';
import { useState } from 'react';
import axios from 'axios';
import Nav from '../navbar/nav';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("")

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(email, password);
    try {
      const response = await axios.post('http://localhost:5000/users', { email, password });
      console.log(response);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      alert(error.message);
      setMessage("Incorrect Login Details");
    }
  };

  return (
    <div>
        {isLoggedIn ? (
          <Nav/>
        ) : (
          <div id='Login-form'>
            <img src={logo} alt="Logo" id="logo" />
            <form onSubmit={handleLogin}>
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" value={email} required onChange={handleEmailChange} />
              <br />
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" value={password} required onChange={handlePasswordChange} />
              <br />
              <button type="submit" id="login-button">Login</button>
              <p>{message}</p>
            </form>
            </div>
        )}
    </div>
  );
}

export default Login;