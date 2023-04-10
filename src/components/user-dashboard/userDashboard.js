import React from "react";
import "./userDashboard.css";

function UserDashboard() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav>
        <div className="container">
          <h1 className="logo">
            <a href="#">QMUL EECS Connect</a>
          </h1>
          <ul className="menu">
            <li>
              <a href="#">EECS Services &amp; Status</a>
            </li>
            <li>
              <a href="#">Ticket Information</a>
            </li>
            <li>
              <a href="EC.html">Extenuating Circumstances</a>
            </li>
            <li>
              <a href="settings.html">Settings</a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>Welcome to EECS Connect</h1>
            <p>Share your feedback and help us improve!</p>
            <a href="#" className="btn-primary">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2>Why Choose Us?</h2>
          <div className="feature-item">
            <h3>Easy to Use</h3>
            <p>
              Our system is designed to be user-friendly and easy to use for all
              students and staff.
            </p>
          </div>
          <div className="feature-item">
            <h3>Anonymous Feedback</h3>
            <p>
              We value your privacy and allow you to give feedback anonymously.
            </p>
          </div>
          <div className="feature-item">
            <h3>Real-time Reports</h3>
            <p>
              Get real-time reports and insights about the feedback received from
              students and staff.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>
            We are a team of dedicated professionals who are passionate about
            improving the quality of education in our university. Our feedback
            system is designed to help students and staff share their opinions and
            suggestions anonymously.
          </p>
          <a href="#" className="btn-secondary">
            Learn More
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <form action="#" method="POST">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit" className="btn-primary">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer>
        <div className="container">
          <p>&copy; 2023 QMUL EECS CONNECT. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  )};

export default UserDashboard;