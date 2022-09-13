import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const SearchRule = ({ setEmailQuery, setRuleQuery }) => {
  const inputClasses = 'w-48 pl-9 py-2 px-3 border border-primary  rounded-md';

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/allOrders/shipping-rules/add-rule');
  };

  return (
    <div className='-mt-3 mb-3 md:mb-0 grid grid-cols-2  sm:flex gap-4'>
      <div className='relative flex items-center'>
        <FiSearch className='inline absolute text-primary ml-3' />
        <input
          id='email'
          type='search'
          className={inputClasses}
          placeholder='Seller Email'
          onChange={(e) => {
            setEmailQuery(e.target.value);
          }}
        />
      </div>
      <div className='relative flex items-center'>
        <FiSearch className='inline absolute text-primary ml-3' />
        <input
          id='rule'
          type='search'
          className={inputClasses}
          placeholder='Rule Name'
          onChange={(e) => {
            setRuleQuery(e.target.value);
          }}
        />
      </div>
      <button
        className='px-4 py-4 sm:py-0 order-first sm:order-none bg-primary col-span-full row-span-1 text-white rounded-xl hover:scale-95 transition ease-in-out duration-500'
        onClick={clickHandler}
      >
        New Rule
      </button>
    </div>
  );
};

export default SearchRule;
