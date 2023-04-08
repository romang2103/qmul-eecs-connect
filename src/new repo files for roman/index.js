// index.js

const form = document.querySelector('form');
const loginButton = document.querySelector('#login-button');

const users = [
  { id: 1, email: 'user1@example.com', password: 'password1' },
  { id: 2, email: 'user2@example.com', password: 'password2' },
  { id: 3, email: 'user3@example.com', password: 'password3' },
];

function loginUser(email, password) {
  const user = users.find((user) => user.email === email && user.password === password);
  if (user) {
    // Login successful, redirect to welcome page
    window.location.href = 'welcome.html';
  } else {
    // Login failed, throw error
    throw new Error('Invalid email or password');
  }
}

loginButton.addEventListener('click', (event) => {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  try {
    const user = loginUser(email, password);
  } catch (error) {
    alert(error.message);
  }
});
