import React from 'react';

function TicketStatus({ ticket, status }) {
  return (
    <div className="ticket-status">
      <p className="ticket-description">{ticket.description}</p>
      <p className="ticket-category">Category: {ticket.category}</p>
      <p className="ticket-priority">Priority: {ticket.priority}</p>
      <p className="ticket-status">Status: {status}</p>
    </div>
  );
}

export default TicketStatus;
