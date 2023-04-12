import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import UserDashboard from '../user-dashboard/userDashboard';
import EC from '../ECs/EC';
import Feedback from '../ticket/ticket';
import Settings from '../settings/settings';
import Services from '../services/services';
import EECSLabs from '../EECSLabs/EECSLabs';
import './nav.css'

function Nav() {
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
                            <Link to="/ticket">Tickets & Extenuating Circumstances</Link>
                        </li>
                        <li>
                            <Link to="/ec">View Ticket Status</Link>
                        </li>
                        <li>
                            <Link to="/EECSLabs">EECS Labs</Link>
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
                <Route path="/ticket" element={<Feedback />} /> 
                <Route path="/ec" element={<EC />} />
                <Route path="/EECSLabs" element={<EECSLabs />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </React.Fragment>
    );
}

export default Nav;
