import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const SearchBar = ({ placeholder, data, onSelect }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [enteredWord, setEnteredWord] = useState('');

  const iconClasses =
    'absolute text-xl text-secondary right-2 top-2 z-20 cursor-pointer';

  const inputHandler = (e) => {
    const query = e.target.value;
    setEnteredWord(query);
    const newFilter = data.filter((value) =>
      value.email.toLowerCase().includes(query.toLowerCase())
    );
    if (query === '') {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInputHandler = () => {
    setFilteredData([]);
    setEnteredWord('');
  };

  const selectSellerHandler = (e) => {
    // console.log(e.target.innerHTML);
    onSelect(e.target.innerHTML);
    clearInputHandler();
  };

  return (
    <div>
      <div className='relative w-fit'>
        {filteredData.length === 0 ? (
          <FiSearch className={iconClasses} />
        ) : (
          <MdClose className={iconClasses} onClick={clearInputHandler} />
        )}
        <input
          type='text'
          value={enteredWord}
          placeholder={placeholder}
          className='p-2 border rounded-lg'
          onChange={inputHandler}
        />
      </div>

      {filteredData.length !== 0 && (
        <div className='mt-2 bg-white border h-24 w-1/2 rounded-md overflow-scroll overflow-x-hidden'>
          {filteredData.slice(0, 9).map((seller) => (
            <div
              className='p-2 hover:bg-primary hover:text-white cursor-pointer'
              onClick={selectSellerHandler}
            >
              {seller.email}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
