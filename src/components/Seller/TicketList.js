import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const TicketList = () => {
  const [tickets, setTickets] = useState([]);

  const config = {
    method: 'get',
    url: `https://65.0.204.216/am/tickets/`,
    headers: {},
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axios(config);
      console.log(data);
      setTickets(data);
    };

    fetchDetails();
  }, []);

  return (
    <div>
      <table className='mt-6 table-fixed w-full'>
        <thead className=' border-separate  font-bold text-white bg-primary text-left'>
          <tr>
            <th className=' p-4 rounded-tl-xl '>Ticket ID</th>
            <th>Date</th>
            <th>Company Rep</th>
            <th>Module</th>
            <th className='rounded-tr-xl'> Comment</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.ticket_id} className='border-b'>
              <td className='p-4 '>
                <Link to={`/allTickets/${ticket.ticket_id}`}>
                  {ticket.ticket_id}
                </Link>
              </td>
              <td>{ticket.issue_date}</td>
              <td>{ticket.company_rep_name}</td>
              <td>{ticket.module}</td>
              <td>{ticket.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketList;

// const ticketData = [
//     {
//       ticket_id: 't123',
//       module: 'Logistics',
//       issue_date: '2022-06-21',
//       title: 'Schedule Pickup',
//       description: 'Order ID X has been scheduled to be picked up from A',
//       attachments: '',
//       status: 'Unresolved',
//       seller_id: 's123',
//       company_rep_name: 'Shubh',
//       company_rep_mobile: '12341241',
//     },
//     {
//       ticket_id: 't123',
//       module: 'Logistics',
//       issue_date: '2022-06-21',
//       title: 'Schedule Pickup',
//       description: 'Order ID X has been scheduled to be picked up from A',
//       attachments: '',
//       status: 'Unresolved',
//       seller_id: 's123',
//       company_rep_name: 'Shubh',
//       company_rep_mobile: '12341241',
//     },
//     {
//       ticket_id: 't123',
//       module: 'Logistics',
//       issue_date: '2022-06-21',
//       title: 'Schedule Pickup',
//       description: 'Order ID X has been scheduled to be picked up from A',
//       attachments: '',
//       status: 'Unresolved',
//       seller_id: 's123',
//       company_rep_name: 'Shubh',
//       company_rep_mobile: '12341241',
//     },
//   ];
