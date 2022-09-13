import React from 'react';

const CompanyDetails = ({ details }) => {
  return (
    <div className=' rounded-b-lg shadow-lg '>
      <h3 className='py-3 px-4 bg-primary text-white rounded-t-lg'>
        Company Details
      </h3>
      <div className='py-3 px-4'>
        <div className='mb-2 flex gap-32'>
          <p>
            <span className='text-primary'>Company Name :</span>{' '}
            {details.company_name}
          </p>
          <p>
            <span className='text-primary'>Company Address :</span>{' '}
            {details.company_address}
          </p>
        </div>
        <div className='mb-2 flex gap-32'>
          <p>
            <span className='text-primary'>Company Category :</span>{' '}
            {details.company_category}{' '}
          </p>

          <p>
            <span className='text-primary'>Website URL :</span>{' '}
            {details.website}
          </p>
        </div>
        <p className='mb-2'>
          <span className='text-primary'>KYC Status :</span> {details.kyc}
        </p>
        <p className='mb-2'>
          <span className='text-primary'>Mobile :</span> {details.contact}
        </p>
        <p className='mb-2'>
          <span className='text-primary'>Email :</span> {details.company_mail}
        </p>
        <p className='mb-2'>
          <span className='text-primary'>Date of Onboarding :</span>{' '}
          {details.date_of_onboarding}
        </p>
      </div>
    </div>
  );
};

export default CompanyDetails;
