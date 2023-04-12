import logo from '../../assets/logo2.png';
import './login.css';
import { useState } from 'react';
import axios from 'axios';
import Nav from '../navbar/nav';
import AdminDashboard from '../admin-dashboard/adminDashboard';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("")
  const [role, setRole] = useState('');
  const [userId, setUserId] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    // console.log(email, password);
    try {
      console.log("handling login");
      const response = await axios.post('http://localhost:5000/users', { email, password });
      setUserId(response.data._id);
      console.log("userId", response.data._id);
      // Set the role from the response data
      setRole(response.data.role);
      console.log("role", role);
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
          console.log(role),
          role === 'user' ? (
            // Redirect to User Dashboard
            <Nav userId={userId}/>
          ) : role === 'admin' ? (
            // Redirect to Admin Dashboard
            <AdminDashboard />
          ) : null
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