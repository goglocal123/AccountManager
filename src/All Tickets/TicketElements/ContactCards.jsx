import React, { useEffect, useState } from "react";
import ContactTableData from "./ContactTableData";
import "./TicketEle.css"
var axios = require('axios');
var data = '';

function ContactCards(prop) {

	
	var config = {
	method: 'get',
	url: 'https://65.0.204.216/am/sellers/contacts/',
	headers: { },
	data : data
	};

	const [contacts, setContacts] = useState(null);

	useEffect( () => {
		axios(config)
		.then(function (response) {
			setContacts(response.data)
		})
		.catch(function (error) {
		console.log(error);
		});
	})
	
	if(!contacts)
	{
		return (
			<div>
				Loading ......
			</div>
		)
	}

	return (
		<div>
			<div style={{color: "#646464", fontSize:"90%"}}>Contact Cards</div>
			<table style={{width:"100%", margin:"2% auto auto auto"}}>
				<tr className="contact-card-header">
					<th class="table-card-heading">Name</th>
					<th class="table-card-heading">Contact</th>
					<th class="table-card-heading">Designation</th>
				</tr>

				{contacts.map( (contact) => {
                    if(contact.seller_id == prop.seller_id)
                        return ( <ContactTableData name={contact.name} contact={contact.mobile_number} desig={contact.designation}/>);
                }) }
				
			</table>
		</div>
	);
}

export default ContactCards;
