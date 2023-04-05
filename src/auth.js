// auth.js file

const users = [
    { id: 1, email: 'user1@example.com', password: 'password1' },
    { id: 2, email: 'user2@example.com', password: 'password2' },
    { id: 3, email: 'user3@example.com', password: 'password3' },
  ];
  
  function loginUser(email, password) {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      // Login successful, return user object
      return user;
    } else {
      // Login failed, throw error
      throw new Error('Invalid email or password');
    }
  }
  
  module.exports = {
    loginUser,
  };
  