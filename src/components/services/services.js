import React, { useState, useEffect } from "react";
import axios from "axios"; // For making HTTP requests to your backend MongoDB server
import './services.css'

const Services = () => {
  const [services, setServices] = useState([]); // State to store table data

  // Function to fetch data from backend MongoDB server (example)
  const fetchData = async () => {
    console.log("trying to fetch data");
    try {
      const response = await axios.get("http://localhost:5000/services"); // Updated URL to match backend endpoint
      setServices(response.data);
      console.log(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="services-container">
      <table className="services-table">
        <thead>
          <tr>
            <th className="services-table-header">Service</th>
            <th className="services-table-header">Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr key={item._id} className="services-table-row">
              <td className="services-table-data">{item.service}</td>
              <td className={`services-table-data ${item.status ? 'active' : 'inactive'}`}>
                {item.status ? 'Active' : 'Inactive'}
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Services;
