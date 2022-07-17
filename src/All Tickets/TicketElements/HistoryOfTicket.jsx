import React, { useEffect, useState } from 'react'
import HistoryData from './HistoryData'
import "./TicketEle.css"
var axios = require('axios');
var data = '';

function HistoryOfTicket(prop) {
  
  var config = {
    method: 'get',
    url: 'https://65.0.204.216/am/tickets/history/',
    headers: { },
    data : data
  };
  
  const [tickets, setTickets] = useState(null);

  useEffect(() => {
		axios(config)
			.then(function (response) {
				setTickets(response.data)
			})
			.catch(function (error) {
				console.log(error);
			});
	}, []);

  if(!tickets)
  {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div>
        <div style={{color: "#646464", fontSize:"90%"}}>History of Ticket ID {prop.id}</div>
			<table style={{width:"100%", margin:"2% auto auto auto"}}>
				<tr className="contact-card-header">
					<th class="table-card-heading">Date</th>
					<th class="table-card-heading">Action</th>
					<th class="table-card-heading">Comment</th>
				</tr>
                {tickets.map( (ticket) => {
                    
                    if(ticket.ticket_id == prop.id)
                       return <HistoryData date={ticket.date} action={ticket.action} comment={ticket.comment}/> 
                })}
			</table>
    </div>
  )
}

export default HistoryOfTicket