import React from 'react';
import './settings.css';

function Settings() {
  return (
    <div>
      <h1>Feedback System Settings</h1>

      {/* General Settings section */}
      <h2 id="general-settings">General Settings</h2>
      <div id="general-settings-content">
        <ul>
          <li className="setting">
            <p className="setting-name">System Status</p>
            <div className="setting-value">
              <label>
                <input type="radio" name="system-status" value="active" defaultChecked /> Active
              </label>
              <label>
                <input type="radio" name="system-status" value="inactive" /> Inactive
              </label>
            </div>
          </li>
          <li className="setting">
            <p className="setting-name">Feedback Window</p>
            <div className="setting-value">
              <label htmlFor="feedback-start">Start:</label>
              <input type="datetime-local" id="feedback-start" name="feedback-start" />
              <br />
              <label htmlFor="feedback-end">End:</label>
              <input type="datetime-local" id="feedback-end" name="feedback-end" />
            </div>
          </li>
        </ul>
      </div>

      {/* Email Notifications section */}
      <h2 id="email-notifications">Email Notifications</h2>
      <div id="email-notifications-content">
        <ul>
          <li className="setting">
            <p className="setting-name">Feedback Received Notification</p>
            <div className="setting-value">
              <label>
                <input type="checkbox" name="feedback-received-notification" /> Enable email notification when feedback is received
              </label>
            </div>
          </li>
          <li className="setting">
            <p className="setting-name">Feedback Responded Notification</p>
            <div className="setting-value">
              <label>
                <input type="checkbox" name="feedback-responded-notification" /> Enable email notification when feedback is responded to
              </label>
            </div>
          </li>
        </ul>
      </div>

      {/* Feedback Categories section */}
      <h2 id="feedback-categories">Feedback Categories</h2>
      <div id="feedback-categories-content">
        <ul>
          <li className="setting">
            <p className="setting-name">Add Category</p>
            <div className="setting-value">
              <input type="text" name="category-name" placeholder="Category Name" />
              <button>Add</button>
            </div>
          </li>
          <li className="setting">
            <p className="setting-name">Remove Category</p>
            <div className="setting-value">
              <select name="category-select">
                <option value="">--Select Category--</option>
                <option value="1">Category 1</option>
                <option value="2">Category 2</option>
                <option value="3">Category 3</option>
              </select>
              <button>Remove</button>
            </div>
          </li>
        </ul>
      </div>

      {/* Feedback Questions section */}
      {/* <h2 id="feedback-questions">Feedback Questions</h2>
      <div id="feedback-questions-content">
        <ul>
          <li className="setting">
            <p className="setting-name">Add Question</p>
            <div className="setting-value">
              <input type="text" name="question-name" placeholder="Question" />
              <button>Add</button> */}
    </div>
  )};
        
export default Settings;