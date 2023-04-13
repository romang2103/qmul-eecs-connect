import React, { useState, useEffect } from 'react';
import './settings.css';
import axios from 'axios';

function Settings(props) {
	// State variables for form data
	const [fullName, setFullName] = useState('');
	const [email, setEmail] = useState('');
	// const [phone, setPhone] = useState('');
	// const [street, setStreet] = useState('');
	// const [city, setCity] = useState('');
	// const [country, setCountry] = useState('');
	// const [zipcode, setZipcode] = useState('');
	const [dob, setDOB] = useState('');
	const [stu_id, setStuID] = useState('');
	const userId = props.userId;

	const [updatedFullName, setUpdatedFullName] = useState('');
	const [updatedEmail, setUpdatedEmail] = useState('');	
	const [updatedPhone, setUpdatedPhone] = useState('');
	const [updatedStreet, setUpdatedStreet] = useState('');
	const [updatedCity, setUpdatedCity] = useState('');
	const [updatedCountry, setUpdatedCountry] = useState('');
	const [updatedZipcode, setUpdatedZipcode] = useState('');
	// const [updatedDOB, setUpdatedDOB] = useState('');
	// const [updatedStuID, setUpdatedStuID] = useState('');

	useEffect(() => {
		const fetchDetails = async () => {
		try {
			const response = await axios.get(`http://localhost:5000/users/${userId}`);
			console.log("fetched personal details", response.data);
			if (!fullName) setFullName(response.data.name);
			if (!dob) setDOB(response.data.dob);
			if (!stu_id) setStuID(response.data.stu_id);
			if (!email) setEmail(response.data.email);
		} catch (error) {
			console.error('Error fetching personal details:', error);
			// Set an appropriate error message or take necessary action
		}
		};
		fetchDetails();
	});
  
  // Handle form submission
	const handleFormSubmit = async () => {
		try {
		  const updateUser = {
			name: updatedFullName,
			phone: updatedPhone,
			email: updatedEmail
		  };

      const address = {
        street: updatedStreet,
			  city: updatedCity,
			  country: updatedCountry,
			  postcode: updatedZipcode
			};
      console.log("address:", address);
	
		  // Save the new user to the database
		  await axios.patch(`http://localhost:5000/users/${userId}`, { updateUser,  address });
		  alert('Personal details updated successfully!');

		  // Clear form data
		  setFullName(updatedFullName);
		  setEmail(updatedEmail);
		  // setDOB(updatedDOB);
		//   setStuID(updatedStuID);
		  setUpdatedFullName('');
		  setUpdatedPhone('');
		  setUpdatedEmail('');
		  setUpdatedStreet('');
		  setUpdatedCity('');
		  setUpdatedCountry('');
		  setUpdatedZipcode('');
	
		  // Show success message to the user
		  alert('Form data submitted successfully!');
		} catch (error) {
		  // Handle any error that occurs during form submission
		  console.error('Error submitting form data:', error);
		  // Show error message to the user
		  alert('Error submitting form data. Please try again.');
		}
	  }

  return (
    <div className="container">
      <div className="row gutters">
        <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar">
                    <img src="https://www.pngkit.com/png/detail/126-1262807_instagram-default-profile-picture-png.png" alt="User Display"></img>
                  </div>
                  <h2 className="user-name">{fullName}</h2>
                </div>
                <div>
					<h5 className="user-email">Email: {email}</h5>
                </div>
                <div>
                  <h5 className="user-id">Student ID: {stu_id}</h5>
                </div>
                <div>
				  <h5 className="user-dob">Date of Birth: {dob}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
          <div className="card h-100">
            <div className="card-body">
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <h2 className="mb-3 text-primary">Personal Details</h2>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text" className="form-control" id="fullName" placeholder="Enter full name" value={updatedFullName} onChange={(e) => setUpdatedFullName(e.target.value)}></input>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="eMail">Email</label>
                    <input type="email" className="form-control" id="eMail" placeholder="Enter email address" value={updatedEmail} onChange={(e) => setUpdatedEmail(e.target.value)}></input>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" className="form-control" id="phone" placeholder="Enter phone number" value={updatedPhone} onChange={(e) => setUpdatedPhone(e.target.value)}></input>
                  </div>
                </div>
              </div>
              <div className="row gutters">
				<div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
					<h2 className="mb-3 text-primary">Address</h2>
					</div>
					<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="street">Street</label>
                    <input type="text" className="form-control" id="street" placeholder="Enter street" value={updatedStreet} onChange={(e) => setUpdatedStreet(e.target.value)}></input>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" className="form-control" id="city" placeholder="Enter city" value={updatedCity} onChange={(e) => setUpdatedCity(e.target.value)}></input>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input type="text" className="form-control" id="country" placeholder="Enter country" value={updatedCountry} onChange={(e) => setUpdatedCountry(e.target.value)}></input>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                  <div className="form-group">
                    <label htmlFor="zipcode">Zipcode</label>
                    <input type="text" className="form-control" id="zipcode" placeholder="Enter zipcode" value={updatedZipcode} onChange={(e) => setUpdatedZipcode(e.target.value)}></input>
                  </div>
                </div>
              </div>
              <div className="row gutters">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                  <div className="text-right">
                    <button type="button" id="submit" name="submit" className="btn btn-primary" onClick={handleFormSubmit}>Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;

