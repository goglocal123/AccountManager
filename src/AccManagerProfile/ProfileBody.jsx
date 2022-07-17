import React, { useEffect, useState } from "react";
import UserInfo from "./UserInfo";
import "./profile.css";
import { NavLink } from "react-router-dom";
import { mobile_no, setPrimary, acc_id, setId } from "../UserContants";

var axios = require("axios");
var data = "";


function ProfileBody() {

	var config = {
		method: "get",
		// url: "https://65.0.204.216/am/profiles/3",
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

	if (account) {
		return (
			<div style={{ fontFamily: "poppins" }}>
				<div class="above-navbar">
					<span class="section-heading" style={{ fontSize: "170%" }}>
						{" "}
						Profile{" "}
					</span>
				</div>
				<NavLink to="/profile/edit">
					<div>
						<img
							style={{ borderRadius: "50%", width: "20%", height: "12rem" }}
							src="https://m.economictimes.com/thumb/msid-79122020,width-1200,height-900,resizemode-4,imgsize-453087/sathish-gopalaiah-2.jpg"
							// src={account.profile_pic}
							alt="User Image"
						></img>
					</div>
				</NavLink>

				<UserInfo
					name={account.name}
					id={account.account_id}
					dob={account.dob}
					email={account.email}
					phone={account.mobile_number}
				/>

				<div>
					<span style={{ marginRight: "3%" }}>
						Two Step Authentication Process:
					</span>
					<label class="switch">
						<input type="checkbox" checked={account.two_step_auth === true ? "true" : "false"} />
						<span class="slider round"></span>
					</label>
				</div>

				<NavLink to="/">
					<div style={{ marginTop: "25%", marginBottom: "5%" }}>
						<button id="acc-manager-log-out-btn" onClick="">
							<i
								class="fa-solid fa-arrow-right-from-bracket"
								style={{ marginRight: "1rem" }}
							></i>
							LogOut
						</button>
					</div>
				</NavLink>
			</div>
		);
	}

	return (
		<div>
			Wait a second .....
		</div>
	);
}

export default ProfileBody;
