import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ticketTracker.css';

function TicketTracker({ userId }) { // Pass the userId as a prop to the component
  const [tickets, setTickets] = useState([]);
  console.log("ticket tracker", userId);

  useEffect(() => {
    // Fetch tickets data from the API based on user ID
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        console.log("fetched tickets", response.data);
        setTickets(response.data);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, [userId]); // Update the dependency array to include userId prop

  return (
    <div className="ticket-tracking-container">
      <h2 className="ticket-tracking-title">My Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets found.</p>
      ) : (
        <ul className="ticket-list">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="ticket-item">
              <h3 className="ticket-subject">{ticket.subject}</h3>
              <p className="ticket-description">Description: {ticket.description}</p>
              <p className="ticket-category">Category: {ticket.category}</p>
              <p className="ticket-priority">Priority: {ticket.priority}</p>
              <p className="ticket-response">Response: {ticket.responsemessage}</p>
              <p className="ticket-responded">Responded: {ticket.responded ? 'Yes' : 'No'}</p>
              {/* Render other ticket details as needed */}
              {/* Render attachments as needed */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TicketTracker;
