import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const Search = ({ placeholder, data, onSelect }) => {
  const [filteredData, setFilteredData] = useState([]);
  const [enteredWord, setEnteredWord] = useState('');

  const iconClasses = 'absolute right-2 bottom-3 cursor-pointer';

  const inputHandler = (e) => {
    const query = e.target.value;
    setEnteredWord(query);
    const newFilter = data.filter((value) =>
      value.toLowerCase().includes(query.toLowerCase())
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

  const selectProductHandler = (e) => {
    // console.log(e.target.innerHTML);
    onSelect(e.target.innerHTML);
    clearInputHandler();
  };

  return (
    <div className=''>
      <div className='p-4 mb-3 bg-white flex items-center gap-6 relative w-full border rounded-lg'>
        <label className='uppercase'>Describe Your Product</label>
        <div className='relative grow'>
          <input
            type='text'
            value={enteredWord}
            placeholder={placeholder}
            className='w-full p-2 border rounded'
            onChange={inputHandler}
          />
          {filteredData.length === 0 ? (
            <FiSearch className={iconClasses} />
          ) : (
            <MdClose className={iconClasses} onClick={clearInputHandler} />
          )}
        </div>
      </div>

      {filteredData.length !== 0 && (
        <div className='bg-white border w-full mb-2 min-h-fit  text-center rounded-md overflow-scroll overflow-x-hidden'>
          {filteredData.slice(0, 9).map((product) => (
            <div
              className='p-2 hover:bg-primary hover:text-white cursor-pointer'
              onClick={selectProductHandler}
            >
              {product}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
