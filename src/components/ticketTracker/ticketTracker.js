import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ticketTracker.css';

function TicketTracker(props) { // Pass the userId as a prop to the component
  const [tickets, setTickets] = useState([]);
  const userId = props.userId;
  console.log("ticket tracker", userId);

  useEffect(() => {
    // Fetch tickets data from the API based on user ID
    const fetchTickets = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        console.log("fetched tickets", response.data.tickets);
        setTickets(response.data.tickets);
      } catch (error) {
        console.error('Error fetching tickets:', error);
      }
    };
    fetchTickets();
  }, [userId]);

const handleDeleteTicket = async (ticketId) => {
  // Implement the delete ticket logic here
  try {
    // Send a DELETE request to delete the ticket with the given ticketId
    await axios.delete(`http://localhost:5000/users/${userId}/${ticketId}`);
    console.log('Ticket deleted:', ticketId);

    const response = await axios.get(`http://localhost:5000/users/${userId}`);
    setTickets(response.data.tickets);

  } catch (error) {
    console.error('Error deleting ticket:', error);
  }
};


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
              <p className="ticket-response">Response: {ticket.responseMessage}</p>
              <p className="ticket-responded">Responded: {ticket.responded ? 'Yes' : 'No'}</p>
              <button className="ticket-delete-button" onClick={() => handleDeleteTicket(ticket._id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TicketTracker;
