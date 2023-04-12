import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import UserDashboard from '../user-dashboard/userDashboard';
import Settings from '../settings/settings';
import Services from '../services/services';
import './nav.css'
import Ticket from '../ticket/ticket';
import TicketTracker from '../ECs/ticketTracker';

function Nav(props) {
    const userId = props.userId;
    console.log(props.userId);

    return (
        <React.Fragment>
            {/* Navigation Bar */}
            <nav className='navbar'>
                <div className="container">
                    <h1 className="logo">
                        <Link to="/">QMUL EECS Connect</Link>
                    </h1>
                    <ul className="menu">
                        <li>
                            <Link to="/services">EECS Services & Status</Link>
                        </li>
                        <li>
                            <Link to="/ticket">Tickets and Extenuating Circumstances</Link>
                        </li>
                        <li>
                            <Link to="/ec">View Ticket Status</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </div>
            </nav>

            <Routes>
                <Route exact path="/" element={<UserDashboard />} />
                <Route path='/services' element={<Services />} />
                <Route path="/ticket" element={<Ticket userId={userId}/>} /> 
                <Route path="/ec" element={<TicketTracker userId={userId}/>} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </React.Fragment>
    );
}

export default Nav;
