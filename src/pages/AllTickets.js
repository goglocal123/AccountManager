import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumb';
import SearchSort from '../components/SearchSort';
import Header from '../UI/Header/Header';

const AllTickets = () => {
  const [tickets, setTickets] = useState([]);

  const mdTableHeaderClass =
    'md:hidden mb-1 font-bold underline underline-offset-1 decoration-secondary decoration-2';

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
    <section className='p-4'>
      <Header title='Tickets' />

      <Breadcrumb levelOne='Tickets' />

      <SearchSort />

      <div className='p-2 mt-4 hidden md:grid grid-cols-6 bg-primary text-white text-center items-center rounded-tl-xl rounded-tr-xl'>
        <div>Ticket ID</div>
        <div>Date</div>
        <div>Seller Details</div>
        <div>Module</div>
        <div>Details</div>
        <div>Status</div>
      </div>

      {tickets.map((ticket) => (
        <div className='mt-4 lg:mt-0 grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-6 w-full text-center text-sm lg:items-center shadow-main mb-3 py-3 px-1 rounded-xl'>
          <div>
            <div className={mdTableHeaderClass}>Ticket ID</div>
            <Link to={`/allTickets/${ticket.ticket_id}`}>
              {ticket.ticket_id}
            </Link>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Date</div>
            <p>{ticket.issue_date}</p>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Seller Details</div>

            <p>{ticket.seller_id}</p>
            <p>Email ID</p>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Module</div>
            <p>{ticket.module}</p>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Details</div>
            <p>
              {ticket.description.length > 30
                ? ticket.description.substr(0, 29) + ' ...'
                : ticket.description}
            </p>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Status</div>

            <span
              className={`p-2 text-sm text-white rounded-full 
                    ${ticket.status === 'Pending' ? 'bg-red-500' : ''}
                    ${ticket.status === 'Resolved' ? 'bg-green-500' : ''} 
                    ${ticket.status === 'New Query' ? 'bg-blue-500' : ''}
                    ${ticket.status === 'In progress' ? 'bg-orange-500' : ''}`}
            >
              {ticket.status}
            </span>
          </div>
        </div>
      ))}

      <button className='mt-10 p-3 bg-primary text-white w-2/5 rounded-xl'>
        Export to Excel
      </button>
    </section>
  );
};

export default AllTickets;
