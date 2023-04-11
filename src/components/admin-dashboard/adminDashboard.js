import React from 'react';
import './adminDashboard.css';
import { Routes, Route, Link } from 'react-router-dom';
import AdminServices from './admin-services/adminServices';

function AdminDashboard() {
  return (
    <React.Fragment>
        <div className="container">
            <h1>Admin Dashboard</h1>
            <div className="button-container">
                <Link to="/ticket-list" className="link-button">
                    <button className="button">Ticket List</button>
                </Link>
                <Link to="/service-list" className="link-button">
                    <button className="button">Service List</button>
                </Link>
                <Link to="/ec-list" className="link-button">
                    <button className="button">EC List</button>
                </Link>
            </div>
        </div>

        <Routes>
            <Route exact path="/admin" element={<AdminDashboard />} />
            <Route path='/service-list' element={<AdminServices />} />
        </Routes>

    </React.Fragment>
  );
};

export default AdminDashboard;
