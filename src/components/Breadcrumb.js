import React from 'react';

import { FaChevronRight } from 'react-icons/fa';

const Breadcrumb = ({ levelOne, levelTwo, ticketStatus }) => {
  let ticketStatusBg = 'p-2 text-white rounded-full ';

  if (ticketStatus === 'Pending') {
    ticketStatusBg += 'bg-red-500';
  } else if (ticketStatus === 'Resolved') {
    ticketStatusBg += 'bg-green-500';
  } else if (ticketStatus === 'New Query') {
    ticketStatusBg += 'bg-blue-500';
  } else ticketStatusBg += 'bg-orange-500';

  return (
    <nav
      className={`${
        ticketStatus ? 'py-2' : 'py-4'
      } text-xs lg:text-sm font-semibold px-8 my-6 rounded-md text-primary w-full shadow-main flex items-center justify-between`}
    >
      <ol className='list-reset flex'>
        <li>
          <a href='#!'>Home</a>
        </li>
        <li>
          <span className='text-gray-500 mx-2'>
            <FaChevronRight className='inline text-primary' />
          </span>
        </li>
        <li>
          <a href='#!' className='mr-1'>
            {levelOne}
          </a>
        </li>
        {levelTwo && (
          <li>
            <FaChevronRight className='mr-1 inline text-primary' />
          </li>
        )}
        {levelTwo && <li className='text-gray-500'>{levelTwo}</li>}
      </ol>
      {ticketStatus && <div className={ticketStatusBg}>{ticketStatus}</div>}
    </nav>
  );
};

export default Breadcrumb;
