import React from 'react';
import { useState } from 'react';

import { FaTrashAlt } from 'react-icons/fa';
import ProductsModal from './ProductsModal';

const SCtrCatalogueTable = ({
  catalogItems,
  catalogNameQuery,
  countryQuery,
}) => {
  const [modalIsShown, setModalIsShown] = useState(false);

  const mdTableHeaderClass =
    'md:hidden mb-1 font-bold underline underline-offset-1 decoration-secondary decoration-2';

  const checkQueries = (item) => {
    if (catalogNameQuery === '' && countryQuery === '') return item;
    else if (
      catalogNameQuery === '' &&
      item.country.toLowerCase().includes(countryQuery)
    )
      return item;
    else if (
      item.catalogName.includes(catalogNameQuery) &&
      countryQuery === ''
    ) {
      return item;
    }
  };

  const modalVisibilityHandler = () => {
    setModalIsShown(!modalIsShown);
  };

  console.log(catalogItems);

  return (
    <div>
      <div className='py-2 px-1 mt-4 w-full hidden md:grid grid-cols-5 bg-primary  text-white text-center items-center rounded-tl-xl rounded-tr-xl'>
        <div>Date</div>
        <div>Catalog Name</div>
        <div>Country</div>
        <div>Products</div>
        <div>Action</div>
      </div>

      {catalogItems
        .filter((item) => checkQueries(item))
        .map((item) => (
          <div
            key={item.id}
            className='grid grid-cols-2 sm:grid-cols-3 gap-4 md:grid-cols-5 w-full text-center text-sm lg:items-center shadow-main mb-3 py-2 px-1 rounded-xl'
          >
            <div>
              <div className={mdTableHeaderClass}>Date</div>
              <p className='ml-3'>{item.date}</p>
            </div>

            <div>
              <div className={mdTableHeaderClass}>Catalog Name</div>
              <p>{item.catalogName}</p>
            </div>

            <div>
              <div className={mdTableHeaderClass}>Country</div>
              <p>{item.country}</p>
            </div>

            <div>
              <div className={mdTableHeaderClass}>Products</div>
              <div
                className='mr-2 hover:cursor-pointer underline'
                onClick={modalVisibilityHandler}
              >
                Click Here
              </div>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Action</div>
              <button className='px-2 py-1 rounded-lg text-white bg-red-500 mr-3'>
                <FaTrashAlt className='inline mr-1' />
                <span>Delete</span>
              </button>
            </div>
          </div>
        ))}

      {modalIsShown && <ProductsModal onClose={modalVisibilityHandler} />}
    </div>
  );
};

export default SCtrCatalogueTable;
