import React from 'react';
import Modal from '../UI/Modal';

const AddContactModal = (props) => {
  const inputClasses = 'mb-4 p-2 border  rounded-lg';

  const submitHandler = (e) => {
    e.preventDefault();

    props.onClose();
  };

  return (
    <Modal classes='fixed w-1/3 top-24 left-1/3 z-20 bg-white rounded-3xl'>
      <div className='m-4'>
        <div className='mb-6 font-semibold text-xl text-center'>
          Add Contacts
        </div>
        <form
          className='w-2/3 grid grid-cols-1 mx-auto'
          onSubmit={submitHandler}
        >
          <input type='text' className={inputClasses} placeholder='Name' />
          <input
            type='text'
            className={inputClasses}
            placeholder='Designation'
          />
          <input type='text' className={inputClasses} placeholder='Mobile' />
          <input type='email' className={inputClasses} placeholder='Email ID' />
          <input type='text' className={inputClasses} placeholder='Notes' />
          <button className='mb-4 p-3 bg-primary text-white rounded-2xl'>
            Submit
          </button>
        </form>
      </div>
    </Modal>
  );
};

export default AddContactModal;
