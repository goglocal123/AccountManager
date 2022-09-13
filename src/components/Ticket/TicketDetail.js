import React from 'react';

const TicketDetail = ({ ticket }) => {
  return (
    <div className='shadow-md rounded-lg overflow-hidden'>
      <div className='p-3 bg-primary text-white'>Ticket Details (ZS38238)</div>
      <div className='flex gap-8 m-4'>
        <div>
          <span className='text-primary'>Module :</span> Global Expansion
          Strategy
        </div>
        <div>
          <span className='text-primary' n>
            Date :
          </span>{' '}
          April 1,2021
        </div>
        <div>
          <span className='text-primary'>Title :</span> Expansion USA/UAE/Oman
        </div>
      </div>
      <div className='m-4'>
        <p className='text-primary'>Description : </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident,
          voluptates doloremque hic, molestiae in saepe commodi perferendis
          nihil rem aspernatur repudiandae reiciendis. Aut velit maxime vero
          quidem soluta cum dolores, magnam culpa, ea alias in quo voluptate ad
          fugiat eligendi delectus obcaecati. Voluptatem cumque itaque quis
          nesciunt voluptas, dicta ratione!
        </p>
        {/* <p>{ticket.description}</p> */}
      </div>
      <div className='m-4'>
        <p className='text-primary'>Attachment :</p>
        <p>...</p>
      </div>
    </div>
  );
};

export default TicketDetail;
