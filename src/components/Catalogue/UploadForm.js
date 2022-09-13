import React from 'react';
import { useState } from 'react';

import CatalogTemplate from '../../files/Catalog_Template.csv';

import './UploadForm.css';

import { FaFileAlt, FaUpload } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const UploadForm = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  const inputClasses =
    'border border-gray-400 bg-gray-100 block mt-1 py-2 px-4 w-full rounded focus:outline-none focus:border-primary ';

  const fileUploadHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);

    console.log(e.target.files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = (e) => {
      console.log(e);
    };
  };

  return (
    <section className='parent'>
      <div className='p-4 h-screen flex items-center justify-center'>
        <form className='px-4 pt-4 pb-8 space-y-8 border rounded-xl bg-white shadow-main'>
          <div className='flex space-x-6'>
            <div className='w-1/2'>
              <label htmlFor='sellerId'>Seller ID</label>
              <input
                type='text'
                name='sellerId'
                id='sellerId'
                placeholder='Enter Seller ID'
                className={inputClasses}
              />
            </div>
            <div className='w-1/2'>
              <label htmlFor='sellerName'>Seller Name</label>
              <input
                type='text'
                name='sellerName'
                id='sellerName'
                placeholder='Enter Seller Name'
                className={inputClasses}
              />
            </div>
          </div>
          <div>
            <label>Uploaded File -</label>
            <span>
              <FaFileAlt className='inline mx-2' />
            </span>
            {selectedFile && selectedFile.name}
          </div>
          <div className=' relative'>
            <label htmlFor='files' className=''>
              Upload File
            </label>
            <span className='ml-4 py-1 px-2 rounded-l border'>
              <FaUpload className='inline' />
            </span>
            <input
              type='file'
              id='files'
              onChange={fileUploadHandler}
              className={`${
                isFilePicked ? 'bg-green-300' : ''
              } px-2 py-1 border-t border-r border-b w-1/3 rounded-r hover:cursor-pointer`}
            />
            <Link
              to={CatalogTemplate}
              target='_blank'
              download='Catalog_template.csv'
              className='text-gray-500 absolute text-sm mt-1 left-28 top-8'
            >
              Click to download sample file
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UploadForm;
