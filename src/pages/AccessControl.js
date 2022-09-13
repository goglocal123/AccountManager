import React, { useState } from 'react';
import SearchBar from '../components/AccessControl/SearchBar';

const sellers = [
  { email: 'yusuf.k@goglocal.live', contact: '9997035168' },
  { email: 'hiren@goglocal.in', contact: '9934857234' },
  { email: 'shubham@goglocal.live', contact: '9798645390' },
  { email: 'ashish@live.com', contact: '7906091852' },
  { email: 'Yusuf.k@goglocal.live', contact: '9997035168' },
  { email: 'hiren@goglocal.in', contact: '9934857234' },
  { email: 'shubham@goglocal.live', contact: '9798645390' },
  { email: 'ashish@live.com', contact: '7906091852' },
];

const modules = [
  'Cataloging',
  'GoGlocal Store',
  'Global Expansion Strategy',
  'Marketplace Integration',
  'Digital Push',
  'Order Management',
  'Logistics',
  'Payments',
  'B2B',
];

// const initialState = [
//   {
//     name: 'yusuf.k@goglocal.live',
//     granted: [],
//   },
// ];

const AccessControl = () => {
  const [selectedSeller, setSelectedSeller] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [selections, setSelections] = useState({
    modules: [],
  });

  const btnClasses =
    'bg-primary rounded-xl text-sm sm:text-base text-white px-4 py-1 hover:bg-secondary hover:text-black';

  const editAccessHandler = () => {
    setIsEditing(true);
  };

  const handleOnChange = (e) => {
    const { value, checked } = e.target;
    const { modules } = selections;

    // console.log(`${value} is ${checked}`);

    if (checked) {
      setSelections({
        modules: [...modules, value],
      });
    } else {
      setSelections({
        modules: modules.filter((e) => e !== value),
      });
    }
  };

  const handleDiscard = () => {
    setIsEditing(false);
  };

  return (
    <section className='p-4'>
      <header className='mb-6 text-lg  md:text-3xl font-semibold text-primary'>
        Access Control
      </header>
      <SearchBar
        placeholder='Search Seller'
        data={sellers}
        onSelect={setSelectedSeller}
      />

      {selectedSeller && (
        <>
          <div className='mt-6'>
            Seller : <span className='font-semibold'>{selectedSeller}</span>
          </div>

          <div className='mt-6 p-4 border rounded-xl'>
            <div className='flex gap-6 items-center mb-3'>
              <p className='font-semibold'>Seller Central</p>
              {!isEditing && (
                <button className={btnClasses} onClick={editAccessHandler}>
                  Edit
                </button>
              )}
              {isEditing && (
                <div className='flex gap-3'>
                  <button
                    className={btnClasses}
                    onClick={() => setIsEditing(false)}
                  >
                    Save
                  </button>
                  <button
                    className={`${btnClasses} !bg-white text-primary border border-primary`}
                    onClick={handleDiscard}
                  >
                    Discard Changes
                  </button>
                </div>
              )}
            </div>
            <ul className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
              {modules.map((module, i) => (
                <li key={i}>
                  <input
                    type='checkbox'
                    id={module}
                    value={module}
                    disabled={!isEditing}
                    className='mr-2 accent-primary'
                    onChange={handleOnChange}
                  />
                  <label
                    htmlFor={module}
                    className={!isEditing ? 'text-gray-400' : ''}
                  >
                    {module}
                  </label>
                </li>
              ))}
            </ul>
          </div>

          {/* <p>{selections.modules.toString()}</p> */}
        </>
      )}
    </section>
  );
};

export default AccessControl;

/* <input
                    type='checkbox'
                    id={module}
                    name={module}
                    disabled={!isEditing}
                    className='mr-2 accent-primary'
                    checked={checkedState[i]}
                    onChange={() => checkboxClickHandler(i)}
                  /> */

// const checkboxClickHandler = (position) => {
//   const updatedCheckedState = checkedState.map((item, index) =>
//     index === position ? !item : item
//   );
//   console.log(updatedCheckedState);
//   setCheckedState(updatedCheckedState);

//   updatedCheckedState.map((currValue, index) => {
//     if (currValue === true) {
//       console.log(modules[index]);
//       initialState[0].modules.push(modules[index]);
//       console.log(initialState);

//       userModules.find((seller) => seller.name === selectedSeller);
//     }
//   });
// };
// let sel = [];

// const handleOnChange = (module) => {
//   sel = selections;
//   let find = sel.indexOf(module);
//   if (find > -1) {
//     sel.splice(find, 1);
//   } else {
//     sel.push(module);
//   }
//   console.log(sel);

//   setSelections(sel);
// };
