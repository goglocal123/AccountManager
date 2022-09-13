import React from 'react';
import Modal from '../UI/Modal';

const ActionModal = (props) => {
  const clickHandler = () => {
    props.onClose();
    props.showCommentModal();
  };

  return (
    <Modal
      classes='fixed w-1/3 top-48 left-1/3 z-20 bg-white rounded-3xl'
      onClose={props.onClose}
    >
      <div className='py-10 grid grid-cols-1 gap-6 text-center'>
        <div className='text-xl font-semibold'>Take Action</div>
        <button className='p-3 w-2/3 mx-auto bg-primary text-white rounded-xl'>
          Mark as Resolved
        </button>
        <button
          className='p-3 w-2/3 mx-auto border rounded-xl text-primary'
          onClick={clickHandler}
        >
          Add comment
        </button>
      </div>
    </Modal>
  );
};

export default ActionModal;
