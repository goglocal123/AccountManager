import React from 'react';
// import { FiSearch } from 'react-icons/fi';
import { FaDownload, FaSearch } from 'react-icons/fa';
import DownloadCatalogue from './DownloadCatalogue';

const Search = ({ setIdQuery, setEmailNameQuery }) => {
  const inputClasses =
    'w-36 lg:w-48 text-xs lg:text-base pl-9 py-2 px-3 border border-primary  rounded-md';

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-4'>
        <div className='relative flex items-center'>
          <FaSearch className='inline absolute text-primary ml-3' />
          <input
            id='sellerID'
            type='search'
            className={inputClasses}
            placeholder='HSN'
            onChange={(e) => {
              setIdQuery(e.target.value);
            }}
          />
        </div>
        <div className='relative flex items-center'>
          <FaSearch className='inline absolute text-primary ml-3' />
          <input
            id='emailName'
            type='search'
            className={inputClasses}
            placeholder='SKU'
            onChange={(e) => {
              setEmailNameQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <DownloadCatalogue />
    </div>
  );
};

export default Search;
