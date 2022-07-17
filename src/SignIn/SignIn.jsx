import React,{useState} from "react";
import LogoImg from "../resources/loginImg.png";
import goGlocal from "../resources/GoGlocalBrandlogo.png";
import signInLogo from "../resources/Sign in.png";
import "./signIn.css";
import { NavLink, useNavigate } from "react-router-dom";
import { mobile_no, setPrimary, acc_id, setId } from "../UserContants";

var axios = require('axios');
var data = '';
var data2 = '';


function SignIn() {

	const[mob,setMob] = useState("");
	const[password, setPassword] = useState("");
	
	
	var isLogged = false;

	var list;
	var profiles;

	const navigate = useNavigate();

	function searchID()
	{
		console.log("Searching Started")

		profiles.map((prof) => {

			if(prof.mobile_number == mobile_no)
			{
				console.log("Account Identified")
				// console.log(prof.account_id)
				setId(prof.account_id)
			}
		})

		console.log("Account Id = " + acc_id)
	}

	function retrieve()
	{
		console.log("retrieve Entered");

		var config = {
			method: 'get',
			url: 'https://65.0.204.216/am/profiles/',
			headers: { },
			data : data2
		};
		
		axios(config)
		.then(function (response) {
			// console.log("reception success");
			console.log(response.data);
			profiles = response.data;
			searchID();

		})
		.catch(function (error) {
			console.log(error);
		});
	}

	function doWork()
	{
		const item = {mob, password}

		console.log("2nd success")
		

		list.map( (x) =>
		{
			if(x.mobile_number === mob && x.password === password)
			{
				navigate('/profile');
				console.log("User Matched")
				isLogged = true;
				setPrimary(mob)
				retrieve();
			}
			
		})

		console.log("Mobile = " + mobile_no);

		if(!isLogged)
		{
			alert("Invalid Credentials Entered")
		}

	}

	function login()
	{

		console.log("ENTERED")

		var config = {
			method: 'get',
			url: 'https://65.0.204.216/am/',
			headers: { },
			data : data
		  };
		  
		  axios(config)
		  .then(function (response) {
			// console.log(JSON.stringify(response.data));
			console.log(response.data);
			list = response.data;
			console.log("Success")
			doWork();
		  })
		  .catch(function (error) {
			console.log(error);
		  });

		  
	}

	return (
		<div>
			<div class="loginBody">
				<div style={{ width: "50%" }}>
					<img id="login-bg-img" src={LogoImg}></img>
				</div>
				<div style={{ marginLeft: "10rem" }}>
					<div>
						<img src={goGlocal}></img>
					</div>
					<div>
						<img src={signInLogo} class="signIn-txt"></img>
					</div>
					<div style={{ width: "100%" }}>
						<form>
							<div class="form-group field-inputs">
								<input
									type="number"
									class="form-control"
									id="number-input-form"
									aria-describedby="numberHelp"
									placeholder="Enter your Number"
									onChange={(e) => setMob(e.target.value)}
								/>
							</div>
							<div class="form-group field-inputs">
								<input
									type="password"
									class="form-control"
									id="password-input-form"
									aria-describedby="passwordHelp"
									placeholder="password"
									onChange={(e) => setPassword(e.target.value)}
								/>
							</div>
							{/* <NavLink to="/profile"> */}
								
							{/* </NavLink> */}
						</form>
						<div className="button-div">
									<button className="signIn-btn" onClick={login}>Sign In</button>
									<a
										href=""
										style={{
											float: "right",
											fontSize: "90%",
											marginTop: "1rem",
										}}
									>
										Forgot Password ?
									</a>
								</div>
					</div>
				</div>
			</div>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<p>
					By clicking 'Continue' you agreee to our{" "}
					<span style={{ color: "blue" }}>
						Terms of Service and Privacy Policy
					</span>
				</p>
			</div>
		</div>
	);
}

export default SignIn;
