import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

const OrderStates = ({ assignedFilter, setAssignedFilter }) => {
  //   const [isAssigned, setIsAssigned] = useState(false);

  const onNewsletterChange = (checked) => {
    console.log(checked);
    console.log(assignedFilter);

    setAssignedFilter(checked);
  };

  return (
    <div className='p-1 md:p-2 border rounded-xl flex items-center'>
      <label
        htmlFor='isAssigned'
        className='mr-2 text-xs md:text-sm lg:text-md'
      >
        Status
      </label>
      <ToggleSwitch
        id='isAssigned'
        checked={assignedFilter}
        onChange={onNewsletterChange}
      />
    </div>
  );
};

export default OrderStates;
