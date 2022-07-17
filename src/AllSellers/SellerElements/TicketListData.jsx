import React, { useEffect, useState } from 'react'
var axios = require('axios');
var data = '';


function TicketListData(props) {


  var config = {
    method: 'get',
    url: `https://65.0.204.216/am/tickets/${props.ticketId}/`,
    headers: {},
    data: data
  };

  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    axios(config)
      .then(function (response) {

        setTicket(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  })

  if (!ticket)
    return (
      <div>

      </div>
    )

  return (
    <tr class="contact-card-table-row">
      <td class="contact-card-table-data" style={{ color: "#646464" }}>
        {ticket.ticket_id}
      </td>
      <td class="contact-card-table-data" style={{ color: "#646464" }}>
        {ticket.issue_date}
      </td>
      <td class="contact-card-table-data" style={{ color: "#1F2124" }}>
        {ticket.company_rep_name}
      </td>
      <td class="contact-card-table-data" style={{ color: "#1F2124" }}>
        {ticket.module}
      </td>
      <td class="contact-card-table-data" style={{ color: "#646464" }}>
        {ticket.description}
      </td>
    </tr>
  )
}

export default TicketListData