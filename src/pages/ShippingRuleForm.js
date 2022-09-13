import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import AllRules from '../components/ShippingRule/AllRules';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// url='https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'

const ShippingRuleForm = ({ orderDetails }) => {
  return (
    <section className='mx-4 mt-8 grid place-items-center'>
      {orderDetails.length === 0 && (
        <div className='h-screen -mt-8 w-full flex items-center justify-center'>
          <NavLink
            to='/allOrders/shipping-rules/add-rule'
            className='px-6 py-4 bg-primary text-white rounded-xl'
          >
            Add Rule
          </NavLink>
        </div>
      )}
      <ToastContainer />

      <AllRules orders={orderDetails} />
    </section>
  );
};

export default ShippingRuleForm;
