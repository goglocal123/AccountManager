import React from 'react';

const ContactCards = () => {
  const contacts = [
    {
      contact_id: 1,
      name: 'Jonas Kakarata',
      contact: 9389739737,
      email: 'xyz@gmail.com',
      designation: 'Project Manager',
    },
    {
      contact_id: 2,
      name: 'Jonas Kakarata',
      contact: 9389739737,
      email: 'xyz@gmail.com',
      designation: 'Project Manager',
    },
  ];

  return (
    <div>
      <div className='mt-4 font-semibold text-primary'>Contact Cards</div>
      <table className='mt-3 table-fixed w-full'>
        <thead className=' border-separate bg-primary text-white text-left'>
          <tr>
            <th className=' p-4 rounded-tl-xl '>Name</th>
            <th>Contact</th>
            <th>Email</th>
            <th className='rounded-tr-xl'> Designation</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.contact_id} className='border-b'>
              <td className='p-4 '>{contact.name}</td>
              <td>{contact.contact}</td>
              <td>{contact.email}</td>
              <td>{contact.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactCards;
