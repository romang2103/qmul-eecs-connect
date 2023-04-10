import React, { useState } from 'react';
import './ticket.css';

function Feedback() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('General Feedback');
  const [semester, setSemester] = useState('Fall 2022');
  const [courseCode, setCourseCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add code here to send the feedback information to the backend
    alert(`Feedback submitted: ${subject}, ${description}, ${category}, ${semester}, ${courseCode}`);
    setSubject('');
    setDescription('');
    setCategory('General Feedback');
    setSemester('Fall 2022');
    setCourseCode('');
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

  const handleSemesterChange = (event) => {
    setSemester(event.target.value);
  };

  const handleCourseCodeChange = (event) => {
    setCourseCode(event.target.value);
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label htmlFor="subject" className="feedback-label">Subject:</label>
        <input type="text" id="subject" name="subject" value={subject} onChange={handleSubjectChange} className="feedback-input" />
        <br />
        <label htmlFor="description" className="feedback-label">Description:</label>
        <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} className="feedback-input"></textarea>
        <br />
        <label htmlFor="category" className="feedback-label">Category:</label>
        <select id="category" name="category" value={category} onChange={handleCategoryChange} className="feedback-input">
          <option value="General Feedback">General Feedback</option>
          <option value="Course Feedback">Course Feedback</option>
          <option value="Instructor Feedback">Instructor Feedback</option>
          <option value="Facilities Feedback">Facilities Feedback</option>
        </select>
        <br />
        <label htmlFor="semester" className="feedback-label">Semester:</label>
        <input type="text" id="semester" name="semester" value={semester} onChange={handleSemesterChange} className="feedback-input" />
        <br />
        <label htmlFor="courseCode" className="feedback-label">Course Code:</label>
        <input type="text" id="courseCode" name="courseCode" value={courseCode} onChange={handleCourseCodeChange} className="feedback-input" />
        <br />
        <button type="submit" className="feedback-submit">Submit</button>
      </form>
    </div>
  );
}

export default Feedback;
