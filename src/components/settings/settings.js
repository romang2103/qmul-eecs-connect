import React from 'react';
import './settings.css';

function Settings() {
  return (
    <div class="container">
		<div class="row gutters">
			<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
				<div class="card h-100">
					<div class="card-body">
						<div class="account-settings">
							<div class="user-profile">
								<div class="user-avatar">
					<img src="https://www.pngkit.com/png/detail/126-1262807_instagram-default-profile-picture-png.png" alt="User Display"></img>
								</div>
								<h2 class="user-name">User Name</h2>
							</div>
					<div>
						<h5 class="user-dob">dd/mm/yyyy</h5>
					</div>
					<div>
						<h5 class="user-id">StudentID(210504053)</h5>
					</div>
					<div>
						<h5 class="user-email">username1@qmul.ac.uk</h5>
					</div>
							<div class="bio">
								<h2 class="mb-2 text-primary">About</h2>
								<p>Second year computer science student at Queen Mary's University of London, working within the School of Electronics and Engineering.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
				<div class="card h-100">
					<div class="card-body">
						<div class="row gutters">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<h2 class="mb-3 text-primary">Personal Details</h2>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="fullName">Full Name</label>
									<input type="text" class="form-control" id="fullName" placeholder="Enter full name"></input>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="eMail">Email</label>
									<input type="email" class="form-control" id="eMail" placeholder="Enter email address"></input>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="phone">Phone</label>
									<input type="text" class="form-control" id="phone" placeholder="Enter phone number"></input>
								</div>
							</div>
						</div>
						<div class="row gutters">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<h2 class="mb-3 text-primary">Address</h2>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="Street">Street</label>
									<input type="name" class="form-control" id="Street" placeholder="Enter House Number and Street Name"></input>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="ciTy">City</label>
									<input type="name" class="form-control" id="ciTy" placeholder="Enter City"></input>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="sTate">County</label>
									<input type="text" class="form-control" id="sTate" placeholder="Enter County"></input>
								</div>
							</div>
							<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
								<div class="form-group">
									<label for="zIp">Postcode</label>
									<input type="text" class="form-control" id="zIp" placeholder="Postcode"></input>
								</div>
							</div>
						</div>
						<div class="row gutters">
							<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
								<div class="text-right">
									<button type="button" id="submit" name="submit" class="btn btn-secondary">Cancel</button>
									<button type="button" id="submit" name="submit" class="btn btn-primary">Update</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  )};
        
export default Settings;