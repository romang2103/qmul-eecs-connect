import React, { useState } from 'react';
import './ticket.css';
import axios from 'axios';

function Ticket(props) {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Extenuating Circumstances');
  const [priority, setPriority] = useState('High');
  const [attachments, setAttachments] = useState([]);
  const userId  = props.userId;
  // const [tickets, setTickets] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("handling submit", userId);

    try {
      // Create a new ticket object with the form data
      const newTicket = {
        subject: subject,
        description: description,
        category: category,
        priority: priority,
        attachments: attachments,
        responsemessage: '', // Initialize responsemessage as an empty string
        responded: false, // Initialize responded as false
        userId: userId
      };

      await axios.post(`http://localhost:5000/users/${userId}`, newTicket); // Update the API endpoint to include the userId in the URL

      // Reset form fields after successful submission
      setSubject('');
      setDescription('');
      setCategory('');
      setPriority('');
      setAttachments([]);

      alert('Feedback submitted successfully!');
    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback. Please try again later.');
    }
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    console.log("setting category", event.target.value);
    setCategory(event.target.value);
  };

  const handlePriorityChange = (event) => {
    console.log("setting priority", event.target.value);
    setPriority(event.target.value);
  };

  const handleAttachmentChange = (event) => {
    const files = event.target.files;
    setAttachments([...attachments, ...files]);
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Ticket Submission Form</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label htmlFor="subject" className="feedback-label">Module Number:</label>
        <input type="text" id="subject" placeholder="Enter Module Code here" name="subject" value={subject} onChange={handleSubjectChange} className="feedback-input" />
        <br />
        <label htmlFor="description" className="feedback-label">Description:</label>
        <textarea id="description" name="description" placeholder="Enter Ticket Description here" value={description} onChange={handleDescriptionChange} className="feedback-input"></textarea>
        <br />
        <label htmlFor="category" className="feedback-label">Ticket Category:</label>
        <select id="category" name="category" value={category} onChange={handleCategoryChange} className="feedback-input">
          <option value="Extenuating Circumstances">Extenuating Circumstances</option>
          <option value="Course Feedback">Course Feedback</option>
          <option value="Demonstrator Feedback">Demonstrator Feedback</option>
          <option value="Facilities Feedback">Facilities Feedback</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <label htmlFor="priority" className="feedback-label">Ticket Priority:</label>
        <select id="priority" name="priority" value={priority} onChange={handlePriorityChange} className="feedback-input">
          <option value="High">High</option>
          <option value="Average">Average</option>
          <option value="Low">Low</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <label htmlFor="attachments" className="feedback-label">Attachments:</label>
        <input type="file" id="attachments" name="attachments" onChange={handleAttachmentChange} multiple className="feedback-input" />
        <br />
        <button type="submit" className="feedback-submit">Submit</button>
      </form>
    </div>
  );
}

export default Ticket;
