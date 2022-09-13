import React from 'react';

const SellerDetails = () => {
  return (
    <div className='shadow-md rounded-lg overflow-hidden mt-6 pb-2'>
      <div className='p-3 bg-primary text-white'>Seller Details</div>
      <div className='p-4 flex justify-between items-center'>
        <p>
          <span className='text-primary'> Company Name :</span> Company A
        </p>
        <p>
          <span className='text-primary'>Company Representative : </span>Akaash
          ABC
        </p>
        <p>
          <span className='text-primary'> Company e-Mail : </span>
          company@gmail.com
        </p>
      </div>
      <p className='p-4'>
        <span className='text-primary'>Company contact :</span> 9877674545
      </p>
    </div>
  );
};

export default SellerDetails;
