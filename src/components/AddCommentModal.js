import React from 'react';
import Modal from '../UI/Modal';

const AddCommentModal = (props) => {
  return (
    <Modal classes='fixed  w-1/3 top-24 left-1/3 z-20 bg-white rounded-3xl'>
      <div className='p-6'>
        <div className='mb-8 text-xl font-semibold text-center'>
          Add Comment
        </div>
        <input
          type='text'
          placeholder='Action'
          className='p-2 w-1/2 border border-secondary rounded-md'
        />
        <div className='relative'>
          <label
            htmlFor='comment'
            className='block absolute px-1 -top-3 left-3 z-10 bg-white text-primary text-sm'
          >
            Comment
          </label>
          <textarea className='mt-6 p-3 block border border-secondary rounded-md w-full h-52' />
        </div>
        <button
          className='mt-6 mb-4 p-3 bg-primary text-white float-right rounded-2xl'
          onClick={props.onClose}
        >
          Add Comment
        </button>
      </div>
    </Modal>
  );
};

export default AddCommentModal;
