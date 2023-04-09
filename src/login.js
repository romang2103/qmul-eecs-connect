import logo from './logo2.png';
import './App.css';
import { useState } from 'react';
import Feedback from './components/ticket';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      console.log(response.data);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isLoggedIn ? (
          <Feedback />
        ) : (
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
            <br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
            <br />
            <button type="submit">Login</button>
          </form>
        )}
      </header>
    </div>
  );
}

export default Login;