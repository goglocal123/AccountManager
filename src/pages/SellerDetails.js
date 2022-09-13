import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import profImg from '../assets/displaypic.jpg';
import { BiSupport } from 'react-icons/bi';

import CompanyDetails from '../components/Seller/CompanyDetails';
import ContactDetails from '../components/Seller/ContactDetails';
import TicketList from '../components/Seller/TicketList';
import Breadcrumb from '../components/Breadcrumb';

const SellerDetails = () => {
  const [sellerDetails, setSellerDetails] = useState([]);
  const { sellerId } = useParams();

  const config = {
    method: 'get',
    url: `https://65.0.204.216/am/sellers/${sellerId}/`,
    headers: {},
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axios(config);
      console.log(data);
      setSellerDetails(data);
    };

    fetchDetails();
  }, []);

  // const sellerDetails = [
  //   {
  //     seller_id: 'ZS38238',
  //     company_name: 'ccd',
  //     company_address: 'ccd',
  //     company_category: 'ccd',
  //     contact: '123',
  //     company_mail: 'ccd',
  //     website: 'ccd',
  //     kyc: 3,
  //     date_of_onboarding: '2022-06-19',
  //     account_id: 1,
  //   },
  //   {
  //     seller_id: 'ZS38239',
  //     company_name: 'ccd',
  //     company_address: 'ccd',
  //     company_category: 'ccd',
  //     contact: '123',
  //     company_mail: 'ccd',
  //     website: 'ccd',
  //     kyc: 3,
  //     date_of_onboarding: '2022-06-19',
  //     account_id: 1,
  //   },
  // ];

  console.log(sellerId);

  return (
    <div className='p-4'>
      <header className='flex items-center justify-between text-primary'>
        <h3 className='font-semibold text-3xl'>
          Seller <span className='text-2xl'>{sellerId}</span>
        </h3>
        <div className='flex items-center'>
          <BiSupport className='text-3xl' />
          <span className='mx-3 text-2xl font-semibold'>Account Manager</span>
          <div>
            <img src={profImg} className='w-6 h-6 rounded-full' alt='Manager' />
          </div>
        </div>
      </header>

      <Breadcrumb levelOne='Sellers' levelTwo={sellerId} />
      <CompanyDetails details={sellerDetails} />

      <ContactDetails />

      <div className='text-primary font-semibold mt-4 -mb-2'>Ticket List</div>
      <TicketList />
    </div>
  );
};

export default SellerDetails;
