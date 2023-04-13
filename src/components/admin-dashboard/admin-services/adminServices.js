import React, { useState, useEffect } from "react";
import axios from "axios";

const AdminServices = () => {
  const [services, setServices] = useState([]);

  // Function to fetch data from backend
  const fetchData = async () => {
    console.log("trying to fetch data");
    try {
      const response = await axios.get("http://localhost:5000/services");
      setServices(response.data);
      console.log(response);
    } catch (error) {   
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Function to handle status change for a service
  const handleStatusChange = async (serviceId) => {
    try {
      await axios.put(`http://localhost:5000/services/${serviceId}/toggle`);
      
      // Fetch updated services data from backend
      await axios.get('http://localhost:5000/services');

      // Update state with new status
      setServices(
        services.map((item) => {
            if (item._id === serviceId) {
              return { ...item, status: !item.status }; // Toggle the status
            } else {
              return item;
            }
          })
        );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr key={item._id}>
              <td>{item.service}</td>
              <td>{item.status ? 'Active' : 'Inactive'}</td>
              <td>
                <button
                  onClick={() => handleStatusChange(item._id)}
                >
                  Change Status
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminServices;
