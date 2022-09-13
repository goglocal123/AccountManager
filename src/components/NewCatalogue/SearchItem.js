import React from 'react';
import { useNavigate } from 'react-router-dom';

import { FiSearch } from 'react-icons/fi';

const SearchItem = ({ setCatalogNameQuery, setCountryQuery }) => {
  const inputClasses = 'w-48 pl-9 py-2 px-3 border border-primary rounded-md';

  const navigate = useNavigate();

  const clickHandler = () => {
    navigate('/new-catalogue-form');
  };

  return (
    <div className=' my-3 md:mb-0 grid grid-cols-2  sm:flex gap-4'>
      <div className='relative flex items-center'>
        <FiSearch className='inline absolute text-primary ml-3' />
        <input
          id='catalogName'
          type='search'
          className={inputClasses}
          placeholder='Catalog Name'
          onChange={(e) => {
            setCatalogNameQuery(e.target.value);
          }}
        />
      </div>
      <div className='relative flex items-center'>
        <FiSearch className='inline absolute text-primary ml-3' />
        <input
          id='country'
          type='search'
          className={inputClasses}
          placeholder='Country'
          onChange={(e) => {
            setCountryQuery(e.target.value);
          }}
        />
      </div>
      <button
        className='px-4 py-4 sm:py-0 order-first sm:order-none bg-primary col-span-full row-span-1 text-white rounded-xl hover:bg-secondary ml-auto'
        onClick={clickHandler}
      >
        New Catalog
      </button>
    </div>
  );
};

export default SearchItem;
