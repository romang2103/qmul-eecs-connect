import React, { useState } from 'react';

function Ticket() {
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can add code here to send the ticket information to the backend
    alert(`Ticket submitted: ${subject}, ${description}, ${priority}`);
    setSubject('');
    setDescription('');
    setPriority('Low');
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  return (
    <div>
      <h2>Ticket</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="subject">Subject:</label>
        <input type="text" id="subject" name="subject" value={subject} onChange={handleSubjectChange} />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={handleDescriptionChange} />
        <br />
        <label htmlFor="priority">Priority:</label>
        <select id="priority" name="priority" value={priority} onChange={handlePriorityChange}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Ticket;
