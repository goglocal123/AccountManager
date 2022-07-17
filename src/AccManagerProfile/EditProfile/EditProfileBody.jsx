import React, { useEffect, useState } from "react";
import { acc_id } from "../../UserContants";
import "../profile.css";
var axios = require("axios");
var data = "";

function EditProfileBody({ match }) {

	var config = {
		method: "get",
		url: `https://65.0.204.216/am/profiles/${acc_id}/`,
		headers: {},
		data: data,
	};

	const [account, setAccount] = useState(null);

	useEffect(() => {
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				setAccount(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

	if (!account) {
		return (
			<div>
				Loading ....
			</div>
		)
	}

	function updateInfo() {
		var fname = document.getElementById("inputName").value;
		console.log(fname);
		var fdob = document.getElementById("inputdob").value;
		console.log(fdob);
		var femail = document.getElementById("inputEmail").value;
		console.log(femail);
		var fnum = document.getElementById("inputNumber").value;
		console.log(fnum);
		var fcomp = document.getElementById("inputCompany").value;
		console.log(fcomp);

		var data2 = `{\r\n  "mobile_number": ${fnum},\r\n  "name": "${fname}",\r\n  "dob": "${fdob}",\r\n  "email": "${femail}",\r\n  "two_step_auth": true\r\n}`;

		var config = {
			method: 'put',
			url: `https://65.0.204.216/am/profiles/update/${acc_id}/`,
			headers: {
				"Content-Type": "application/json",
			},
			data: data2
		};

		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	return (
		<div style={{ fontFamily: "poppins" }}>
			<div class="above-navbar">
				<span class="section-heading" style={{ fontSize: "170%" }}>
					{" "}
					Edit Profile{" "}
				</span>
			</div>
			<div>
				<img
					style={{ borderRadius: "50%", width: "20%", height: "12rem" }}
					src="https://m.economictimes.com/thumb/msid-79122020,width-1200,height-900,resizemode-4,imgsize-453087/sathish-gopalaiah-2.jpg"
					alt="User phot"
				></img>
			</div>

			<form style={{ marginTop: "5%", marginBottom: "5%" }}>
				<div
					style={{ display: "flex", justifyContent: "left", fontSize: "75%" }}
				>
					<div style={{ width: "100%" }}>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								First Name
							</label>
							<input
								type="text"
								class="form-control"
								id="inputName"
								defaultValue={account.name}
								aria-describedby="emailHelp"
								style={{ fontSize: "110%" }}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Last Name
							</label>
							<input
								type="text"
								class="form-control"
								id="inputLastname"
								defaultValue="Harimaku"
								aria-describedby="emailHelp"
								style={{ fontSize: "110%" }}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Date of Birth
							</label>
							<input
								type="date"
								class="form-control"
								id="inputdob"
								aria-describedby="emailHelp"
								style={{ fontSize: "110%" }}
								defaultValue={account.dob}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Email address
							</label>
							<input
								type="email"
								class="form-control"
								id="inputEmail"
								aria-describedby="emailHelp"
								defaultValue={account.email}
								style={{ fontSize: "110%" }}
							/>
						</div>
					</div>
					<div style={{ marginLeft: "3rem", width: "100%" }}>
						<div class="mb-3">
							<label for="exampleInputPassword1" class="form-label">
								Mobile
							</label>
							<input
								type="number"
								class="form-control"
								id="inputNumber"
								defaultValue={account.mobile_number}
								style={{ fontSize: "110%" }}
							/>
						</div>
						<div class="mb-3">
							<label for="exampleInputEmail1" class="form-label">
								Company
							</label>
							<input
								type="text"
								class="form-control"
								id="inputCompany"
								defaultValue="Sprinter"
								aria-describedby="emailHelp"
								style={{ fontSize: "110%" }}
							/>
						</div>
					</div>
				</div>

				<div style={{ marginTop: "5%" }}>
					<span style={{ marginRight: "3%", fontSize: "85%" }}>
						Two Step Authentication Process:
					</span>
					<label class="switch">
						<input type="checkbox" />
						<span class="slider round"></span>
					</label>
				</div>

				<button type="submit" class="btn btn-primary" id="edit-profile-save-btn" style={{ marginTop: "5%" }} onClick={updateInfo}>
					Submit
				</button>
			</form>
		</div>
	);
}

export default EditProfileBody;
