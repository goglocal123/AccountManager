import React, { useState } from 'react';
import AddContactModal from '../AddContactModal';

const ContactDetails = () => {
  const [contactModalIsShown, setContactModalIsShown] = useState(false);

  const contactData = [
    {
      seller_id: 'ZS38238',
      name: 'April 1,2021',
      designation: 'Issued',
      mobile_number: '1234567891',
      email: 'abc@gmail.com',
      notes: 'Lorem ipsum dolor sit ...',
    },
    {
      seller_id: 'ZS38239',
      name: 'April 1,2021',
      designation: 'Unresolved',
      mobile_number: '1234567891',
      email: 'abc@gmail.com',
      notes: 'Lorem ipsum dolor sit ...',
    },
    {
      seller_id: 'ZS38240',
      name: 'April 1,2021',
      designation: 'Unresolved',
      mobile_number: '1234567891',
      email: 'abc@gmail.com',
      notes: 'Lorem ipsum dolor sit ...',
    },
  ];

  const showAddContactModalHandler = () => {
    setContactModalIsShown(true);
  };

  return (
    <div>
      <div className='flex justify-between text-primary font-semibold mt-4 -mb-2'>
        <p>Contact details</p>
        <button
          className='underline underline-offset-1'
          onClick={showAddContactModalHandler}
        >
          Add contact +
        </button>
        {contactModalIsShown && (
          <AddContactModal onClose={setContactModalIsShown} />
        )}
      </div>
      <table className='mt-6 table-fixed w-full'>
        <thead className=' border-separate text-white bg-primary text-left'>
          <tr>
            <th className=' p-4 rounded-tl-xl '>Name</th>
            <th>Designation</th>
            <th>Mobile</th>
            <th>Email</th>
            <th className='rounded-tr-xl'> Notes</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact) => (
            <tr key={contact.seller_id} className='border-b'>
              <td className='p-4 '>{contact.name}</td>
              <td>{contact.designation}</td>
              <td>{contact.mobile_number}</td>
              <td>{contact.email}</td>
              <td>{contact.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactDetails;
