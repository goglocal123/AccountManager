import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { BiCaretDown } from 'react-icons/bi';

const SearchSort = () => {
  const inputClasses = 'py-2 px-3 border border-primary  rounded-md';

  return (
    <div className='grid grid-cols-2 sm:flex items-center justify-between gap-2 text-sm sm:text-base mb-6 md:mb-0'>
      <div className='relative flex items-center'>
        <FiSearch className='inline absolute text-primary ml-3' />
        <input
          type='search'
          className={`w-44 sm:w-52 pl-9 ${inputClasses}`}
          placeholder='Search by seller'
        />
      </div>
      <div className='relative flex items-center'>
        <input
          type='search'
          className={`w-44 sm:w-48 ${inputClasses}`}
          placeholder='Sort by'
        />
        <BiCaretDown className='right-4 inline absolute text-primary' />
      </div>
    </div>
  );
};

export default SearchSort;
