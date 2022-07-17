import React, { useEffect, useState } from "react";
import "./SellerEle.css";
import TicketListData from "./TicketListData";
var axios = require("axios");
var data = "";

function TicketList(prop) {

	const [tickets, setTickets] = useState(null);

	var config = {
		method: "get",
		url: "https://65.0.204.216/am/tickets/",
		headers: {},
		data: data,
	};

	useEffect( () => {
		axios(config)
		.then(function (response) {
			setTickets(response.data);
		})
		.catch(function (error) {
			console.log(error);
		});
	})
	
	if(!tickets)
      return(
        <div>
			
        </div>
      )

	return (
		<div>
			<div style={{ color: "#646464", fontSize: "90%" }}>
				History of Ticket ID ZS28238
			</div>
			<table style={{ width: "100%", margin: "2% auto auto auto" }}>
				<tr className="contact-card-header">
					<th class="table-card-heading">Ticket List</th>
					<th class="table-card-heading">Date</th>
					<th class="table-card-heading">Company Rep</th>
					<th class="table-card-heading">Module</th>
					<th class="table-card-heading">Comment</th>
				</tr>

				{tickets.map( (ticket) => {
					if(ticket.seller_id == prop.id)
					{
						return <TicketListData ticketId = {ticket.ticket_id}/>
					}
				})}

				{/* <TicketListData
					id="ZS38238"
					date="April 1, 2021"
					compRep="Project Manager"
					module="Marketplace Integration"
					comment="None"
				/> */}
			</table>
		</div>
	);
}

export default TicketList;
