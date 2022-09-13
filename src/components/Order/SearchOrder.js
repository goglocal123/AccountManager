import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Switch from '../../UI/Switch/Switch';
import OrderStates from './ToggleSwitch/OrderState';
const SearchOrder = ({
  setEmailQuery,
  setOrderQuery,
  assignedFilter,
  setAssignedFilter,
  pendingFilter,
  setPendingFilter,
}) => {
  const inputClasses =
    'w-36 lg:w-48 text-xs lg:text-base pl-9 py-2 px-3 border border-primary  rounded-md';

  // const handleClick = (e) => {
  //   if (e.target.id === 'assigned' && e.target.checked) {
  //     console.log('assigned checked');

  //     setAssignedFilter(true);
  //   } else if (e.target.id === 'assigned' && !e.target.checked) {
  //     console.log('assigned unchecked');

  //     setAssignedFilter(false);
  //   } else if (e.target.id === 'pending' && e.target.checked) {
  //     console.log('pending checked');

  //     setPendingFilter(true);
  //   } else if (e.target.id === 'pending' && !e.target.checked) {
  //     console.log('pending unchecked');

  //     setPendingFilter(false);
  //   }
  // };

  return (
    <div className='-mt-3 grid grid-cols-1 md:flex justify-between gap-4 mb-3 md:mb-0'>
      <div className='flex gap-4 w-full'>
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
            id='order'
            type='search'
            className={inputClasses}
            placeholder='Order ID/AWB'
            onChange={(e) => {
              setOrderQuery(e.target.value);
            }}
          />
        </div>
      </div>

      <div className='md:flex md:gap-2 row-span-1'>
        <OrderStates
          assignedFilter={assignedFilter}
          setAssignedFilter={setAssignedFilter}
          pendingFilter={pendingFilter}
          setPendingFilter={setPendingFilter}
        />
      </div>
    </div>
  );
};

export default SearchOrder;

/* <div>Filter by status : </div>
        <div>
          <input
            type='checkbox'
            id='assigned'
            className='mr-1 accent-primary'
            onClick={handleClick}
          />
          <span className='mr-3'>Assigned</span>
          <input
            type='checkbox'
            id='pending'
            className='mr-1 accent-primary'
            onClick={handleClick}
          />
          <span className='mr-3'>Pending</span>
        </div>
          </div> */
