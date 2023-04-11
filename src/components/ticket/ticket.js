import React, { useState } from 'react';
import './ticket.css';

function Feedback() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('General Feedback');
  const [priority, setPriority] = useState('Fall 2022');
  const [attachments, setAttachments] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Feedback submitted: ${subject}, ${description}, ${category}, ${priority}, ${attachments.length} attachment(s)`);
    setSubject('');
    setDescription('');
    setCategory('General Feedback');
    setPriority('Fall 2022');
    setAttachments([]);
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handlePriorityChange = (event) => {
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
          <option value="General Feedback">Extenuating Circumstances</option>
          <option value="Course Feedback">Course Feedback</option>
          <option value="Instructor Feedback">Demonstrator Feedback</option>
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

export default Feedback;
