import React from 'react';

import { catalogItems } from './catalog-data';

const CatalogueTable = ({ idQuery, emailNameQuery }) => {
  const mdTableHeaderClass =
    'md:hidden mb-1 font-bold underline underline-offset-1 decoration-secondary decoration-2';

  const checkQueries = (item) => {
    if (idQuery === '' && emailNameQuery === '') return item;
    else if (idQuery === '' && item.SKU.includes(emailNameQuery)) return item;
    else if (item.HSN.includes(idQuery) && emailNameQuery === '') {
      return item;
    }
  };

  return (
    <div className='mt-6'>
      <div className='py-2 pl-6 pr-1 mt-4 hidden md:grid grid-cols-9 gap-2 bg-primary text-white text-left items-center rounded-tl-xl rounded-tr-xl'>
        <div>Category</div>
        <div>Sub Category</div>
        <div>SKU</div>
        <div>Image</div>
        <div>Color</div>
        <div>Material</div>
        <div>Price</div>
        <div className='-ml-6'>Description</div>
        <div>HSN</div>
      </div>

      {catalogItems
        .filter((item) => checkQueries(item))
        .map((item) => (
          <div className='mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-9 gap-2 w-full text-left text-sm lg:items-center shadow-main mb-3 py-2 pl-6 pr-1 rounded-xl'>
            <div>
              <div className={mdTableHeaderClass}>Category</div>
              <p>{item.category}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Sub Category</div>
              <p>{item.sub_category}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>SKU</div>
              <p>{item.SKU}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Image</div>
              {/* <p>Image</p> */}
              {/* <img
                className='h-16 w-16 object-cover rounded'
                src={item.image}
                alt={catalogItems.description}
              /> */}
              <a
                href={item.image}
                className='underline'
                target='_blank'
                rel='noreferrer'
              >
                Click here
              </a>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Color</div>

              <p>{item.color}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Material</div>
              <p>{item.material}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Price</div>
              <p>{item.price}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>Description</div>
              <p className='lg:-ml-6 lg:pr-2'>{item.description}</p>
            </div>
            <div>
              <div className={mdTableHeaderClass}>HSN</div>
              <p>{item.HSN}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CatalogueTable;
