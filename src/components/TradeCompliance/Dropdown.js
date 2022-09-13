import { useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { FaChevronDown } from 'react-icons/fa';

const constructionOptions = ['Knitted Or Crocheted', 'Other'];
const genderOptions = ["Men's Or Boy's", "Babies'", 'Other'];
// const compositionOptions = ['Cotton', 'Synthetic Fibre', 'Other', 'Accept'];

const initialValues = {
  cotton: 0,
  fibre: 0,
  other: 0,
};

const Dropdown = ({
  placeholder,
  options,
  setConstructionSelected,
  setGenderSelected,
  setScheduleBVisible,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [percentage, setPercentage] = useState(initialValues);

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const selectOptionHandler = (option) => {
    setShowOptions(false);
    setSelectedOption(option);

    constructionOptions.includes(option) && setConstructionSelected(true);

    genderOptions.includes(option) && setGenderSelected(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const newName = name.split(' ')[0];

    setPercentage({
      ...percentage,
      // converting input value to number
      [newName]: +value,
    });

    console.log(value, name);
    console.log(percentage);
  };

  const checkPercentagesHandler = () => {
    if (percentage.cotton + percentage.synthetic + percentage.other !== 100) {
      toast.error('Total is not equal to 100%. Enter correct percentages.');
    } else {
      setScheduleBVisible(true);
      console.log('yaa');
    }
  };

  return (
    <div class='basis-1/2 relative inline-block text-left'>
      <div>
        <button
          onClick={handleClick}
          type='button'
          className='text-left inline-flex justify-between items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white font-medium text-gray-700 hover:bg-gray-50'
          id='menu-button'
          aria-expanded='true'
          aria-haspopup='true'
        >
          {selectedOption ? selectedOption : placeholder}
          <FaChevronDown className='inline text-sm' />
        </button>
      </div>

      {showOptions && (
        <div
          class='origin-top-right absolute z-10 right-0 mt-2  w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='menu-button'
          tabIndex='-1'
        >
          <div class='py-1' role='none'>
            {options &&
              options.map((option, index) =>
                !options.includes('cotton') ? (
                  <p
                    key={index}
                    onClick={() => selectOptionHandler(option)}
                    class='text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50'
                    role='menuitem'
                    tabIndex='-1'
                    id='menu-item-0'
                  >
                    {option}
                  </p>
                ) : (
                  <p
                    key={index}
                    class='text-gray-700 block px-4 py-2 text-sm hover:cursor-pointer hover:bg-gray-50'
                    role='menuitem'
                    tabIndex='-1'
                    id='menu-item-0'
                  >
                    {option !== 'Accept' && (
                      <input
                        type='number'
                        min={0}
                        name={option}
                        value={percentage.option}
                        onChange={handleInputChange}
                        className='p-1 mr-1 border w-1/5 rounded'
                      />
                    )}
                    {option !== 'Accept' ? (
                      `% ${option.charAt(0).toUpperCase() + option.slice(1)}`
                    ) : (
                      <span onClick={checkPercentagesHandler}>{option}</span>
                    )}
                  </p>
                )
              )}
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Dropdown;
