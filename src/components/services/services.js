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
    <div>
      <table>
        <thead>
          <tr>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {services.map((item) => (
            <tr key={item._id}>
              <td>{item.service}</td>
              <td>{item.status ? 'Active' : 'Inactive'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Services;
