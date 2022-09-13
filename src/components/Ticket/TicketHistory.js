import React from 'react';

const TicketHistory = () => {
  const history = [
    {
      id: 1,
      date: 'April 1,2021',
      action: 'Issued',
      comment: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 2,
      date: 'April 1,2021',
      action: 'Unresolved',
      comment: 'Lorem ipsum dolor sit amet',
    },
  ];

  return (
    <div>
      <div className='mt-6 font-semibold text-primary'>
        History of Ticket ID ZS38238
      </div>
      <table className='mt-4 table-fixed w-full'>
        <thead className=' border-separate bg-primary text-white text-left'>
          <tr>
            <th className=' p-4 rounded-tl-xl '>Date</th>
            <th>Action</th>
            <th className='rounded-tr-xl'> Comment</th>
          </tr>
        </thead>
        <tbody>
          {history.map((ticket) => (
            <tr key={ticket.id} className='border-b'>
              <td className='p-4 '>{ticket.date}</td>
              <td>{ticket.action}</td>
              <td>{ticket.comment}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketHistory;
