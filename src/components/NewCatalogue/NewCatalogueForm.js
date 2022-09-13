import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const options = [
  {
    value: 'productOne',
    label: 'Product 1',
  },
  {
    value: 'productTwo',
    label: 'Product 2',
  },
  {
    value: 'productThree',
    label: 'Product 3',
  },
  { value: 'ProductFour', label: 'Product 4' },
];

const dropdownStyles = {
  option: (provided, state) => ({
    ...provided,
    textAlign: 'center',
    borderBottom: '1px solid white',
    color: state.isSelected ? 'red' : 'white',
    padding: 5,
    backgroundColor: '#1d1125',
  }),
  container: (provided, state) => ({
    ...provided,
    maxWidth: '320px',
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  multiValueLabel: (provided, state) => ({
    ...provided,
    textAlign: 'center',
    backgroundColor: '#1d1125',
    color: 'white',
    padding: '.5rem .75rem',
    borderRadius: '10px 0 0 10px',
  }),
  multiValueRemove: (provided, state) => ({
    ...provided,
    textAlign: 'center',
    backgroundColor: '#1d1125',
    color: 'white',
    borderRadius: '0 10px 10px 0',
  }),
};

const initialState = {
  id: '',
  catalogName: '',
  country: '',
  selectedProducts: [],
  date: '',
};

const NewCatalogueForm = ({ setCatalogItems }) => {
  const [catalogDetails, setCatalogDetails] = useState(initialState);

  const navigate = useNavigate();

  const labelClass = 'float-left w-36';

  const getCurrentDate = () => {
    let date = new Date();
    const result = date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    });

    return result;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCatalogDetails({
      ...catalogDetails,
      [name]: value,
      date: getCurrentDate(),
      id: Math.random() + 1,
    });
  };

  const handleMultiChange = (option) => {
    setCatalogDetails((prev) => ({
      ...prev,
      selectedProducts: option,
    }));
  };

  const updateItems = (item) => {
    setCatalogItems((current) => [...current, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateItems(catalogDetails);
    console.log(catalogDetails);

    navigate('/new-catalogue');
  };

  return (
    <div className='parent h-screen w-full flex items-center justify-center shadow-main'>
      <form
        onSubmit={handleSubmit}
        className='p-4 w-1/2 bg-gray-100 rounded-xl space-y-6'
      >
        <div className='flex items-center'>
          <label className={labelClass}>Catalog Name*</label>
          <input
            type='text'
            name='catalogName'
            value={catalogDetails.catalogName}
            onChange={handleInputChange}
            className='px-2 py-1 border rounded'
            required={true}
          />
        </div>
        <div className='flex items-center'>
          <label className={labelClass}>Country</label>
          <input
            type='text'
            name='country'
            value={catalogDetails.country}
            onChange={handleInputChange}
            className='px-2 py-1 border rounded'
          />
        </div>
        <div className='flex items-center'>
          <label className='w-36'>Products*</label>
          <Select
            name='selectedProducts'
            value={catalogDetails.selectedProducts}
            options={options}
            isMulti={true}
            styles={dropdownStyles}
            onChange={handleMultiChange}
          />
        </div>
        <button
          type='submit'
          className='bg-primary text-white px-3 py-2 rounded-xl float-right'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewCatalogueForm;
