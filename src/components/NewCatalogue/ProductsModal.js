import React from 'react';
import Modal from '../../UI/Modal';

const ProductsModal = (props) => {
  return (
    <Modal classes='fixed  w-1/3 top-24 left-1/3 z-20 bg-white rounded-3xl'>
      <div>Products</div>
      <button
        className='mt-6 mb-4 p-3 bg-primary text-white float-right rounded-2xl'
        onClick={props.onClose}
      >
        Add Comment
      </button>
    </Modal>
  );
};

export default ProductsModal;
