import React, { useState, useEffect } from 'react';
import './adminTickets.css';
import axios from 'axios';

function AdminTickets(props) {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch all tickets from all users
    const fetchTickets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/users');
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };

    fetchTickets();
  }, []);

  const handleResponseSubmit = async (ticketId, userId, responseMessage) => {
    try {
      await axios.patch(`http://localhost:5000/users/${userId}/${ticketId}`, { responseMessage });
      alert('Response submitted successfully!');
      const response = await axios.get('http://localhost:5000/users');
      setTickets(response.data);
    } catch (error) {
      console.error('Error submitting response:', error);
      alert('Failed to submit response. Please try again later.');
    }
  };

  const handleResponseChange = (event, ticketId) => {
    const responseMessage = event.target.value;
    setTickets(prevTickets => {
      return prevTickets.map(ticket => {
        if (ticket._id === ticketId) {
          return { ...ticket, responseMessage };
        } else {
          return ticket;
        }
      });
    });
  };

  return (
    <div className="feedback-container">
      <h2 className="feedback-title">All Tickets</h2>
      {tickets.map(ticket => (
        <div key={ticket._id} className="ticket">
          <div className="ticket-info">
            <div className="ticket-subject">Subject: {ticket.subject}</div>
            <div className="ticket-description">Description: {ticket.description}</div>
            <div className="ticket-category">Category: {ticket.category}</div>
            <div className="ticket-priority">Priority: {ticket.priority}</div>
          </div>
          <div className="ticket-response">
            <label htmlFor={`response-${ticket._id}`} className="ticket-response-label">Response:</label>
            <textarea id={`response-${ticket._id}`} value={ticket.responseMessage} onChange={(event) => handleResponseChange(event, ticket._id)} className="ticket-response-input"></textarea>
            <button onClick={() => handleResponseSubmit(ticket._id, ticket.userId, ticket.responseMessage)} className="ticket-response-submit">Respond</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AdminTickets;
