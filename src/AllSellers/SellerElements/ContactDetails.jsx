import React, { useEffect, useState } from "react";
import AddContactModal from "./AddContactModal";
import AddConatctModal from "./AddContactModal";
import ContactData from "./ContactData";
import "./SellerEle.css";
var axios = require("axios");
var data = "";

function ContactDetails(prop) {

	var config = {
		method: "get",
		url: "https://65.0.204.216/am/sellers/contacts/",
		headers: {},
		data: data,
	};

	const [contact, setContact] = useState(null);

	useEffect(() => {
		axios(config)
			.then(function (response) {

				setContact(response.data);
			})
			.catch(function (error) {
				console.log(error);
			});
	}, [])

	if (!contact) {
		return (
			<div>
				Please Wait .......
			</div>
		)
	}

	return (
		<div>
			<div
				style={{
					color: "#646464",
					fontSize: "90%",
					display: "flex",
					justifyContent: "left",
					alignItems: "center",
				}}
			>
				<div style={{ width: "100%" }}>Contact Details</div>
				<button
					class="add-plus-btn"
					data-toggle="modal"
					data-target="#add-contact-PopUp"
				>
					Add Contacts +
				</button>
				<AddContactModal />
			</div>
			<table style={{ width: "100%", margin: "2% auto auto auto" }}>
				<tr className="contact-card-header">
					<th class="table-card-heading">Name</th>
					<th class="table-card-heading">Designation</th>
					<th class="table-card-heading">Mobile</th>
					<th class="table-card-heading">Email</th>
					<th class="table-card-heading">Notes</th>
				</tr>

				{contact.map((item) => {

					if (prop.id == item.seller_id) {
						return <ContactData name={item.name} desig={item.designation} mobile={item.mobile_number} email={item.email} notes={item.notes} />
					}

				})}

				{/* <ContactData
					name="Alfred Noble"
					desig="Manager"
					mobile="9021938214"
					email="HR Manager"
					notes="lorem ipsum dolor sit amet.."
				/> */}

			</table>
		</div>
	);
}

export default ContactDetails;
