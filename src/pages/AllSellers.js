import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Breadcrumb from '../components/Breadcrumb';
import SearchSort from '../components/SearchSort';
import Header from '../UI/Header/Header';

const AllSellers = () => {
  const [sellers, setSellers] = useState([]);

  const mdTableHeaderClass =
    'md:hidden mb-1 font-bold underline underline-offset-1 decoration-secondary decoration-2';

  useEffect(() => {
    const fetchSellers = async () => {
      const { data } = await axios.get('https://65.0.204.216/am/sellers/');
      console.log(data);
      setSellers(data);
    };

    fetchSellers();
  }, []);

  return (
    <section className='p-4'>
      <Header title='All Sellers' />

      <Breadcrumb levelOne='Sellers' levelTwo='All Sellers' />

      <SearchSort />

      <div className='p-2 mt-4 hidden md:grid grid-cols-6 bg-primary text-white text-center items-center rounded-tl-xl rounded-tr-xl'>
        <div>Seller ID</div>
        <div>Company Name</div>
        <div>Company Email</div>
        <div>KYC Status</div>
        <div>Account Manager</div>
        <div>Category</div>
      </div>

      {sellers.map((seller) => (
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-6 w-full text-center text-sm lg:items-center shadow-main mb-3 py-3 px-1 rounded-xl'>
          <div>
            <div className={mdTableHeaderClass}>Seller ID</div>

            <Link to={`/allSellers/${seller.seller_id}`}>
              {seller.seller_id}
            </Link>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Company Name</div>
            <p>{seller.company_name}</p>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Company Email</div>
            <p>{seller.company_mail}</p>
          </div>
          <div>
            <div className={mdTableHeaderClass}>KYC Status</div>
            <p>KYC {seller.kyc} docs</p>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Account Manager</div>
            <p>Claire Dunphy</p>
          </div>
          <div>
            <div className={mdTableHeaderClass}>Category</div>
            <p>{seller.company_category}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default AllSellers;
