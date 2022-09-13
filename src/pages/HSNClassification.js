import React from 'react';
import { useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';

import Dropdown from '../components/TradeCompliance/Dropdown';
import ScheduleB from '../components/TradeCompliance/ScheduleB';
import Search from '../components/TradeCompliance/Search';

const constructionOptions = ['Knitted Or Crocheted', 'Other'];
const genderOptions = ["Men's Or Boy's", "Babies'", 'Other'];
const compositionOptions = ['cotton', 'synthetic fibre', 'other', 'Accept'];

const products = [
  'Shirt',
  'Jeans',
  'T-Shirt',
  'Jogger',
  'Shorts',
  'Cap',
  'Goggles',
];

const HSNClassification = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [showCharacteristicsSection, setShowCharacteristicsSection] =
    useState(false);
  //   const [selectedOption, setSelectedOption] = useState('');
  const [constructionSelected, setConstructionSelected] = useState(false);
  const [genderSelected, setGenderSelected] = useState(false);
  const [scheduleBVisible, setScheduleBVisible] = useState(false);

  const knownCharacteristicsHandler = () => {
    setShowCharacteristicsSection(!showCharacteristicsSection);
  };

  return (
    <section className='p-4 bg-gray-100'>
      <div className='text-primary font-semibold text-2xl mb-4'>
        HSN Classification
      </div>
      <Search
        placeholder='Product'
        data={products}
        onSelect={setSelectedProduct}
      />

      <div className='border bg-white mb-4 rounded-lg'>
        {selectedProduct && (
          <div className='p-4 my-3 text-center border-b-2'>
            Here's what we know about your{' '}
            <span className='font-semibold'>{selectedProduct}</span>
          </div>
        )}

        <div className='p-4'>
          <div onClick={knownCharacteristicsHandler} className='my-3 text-xl'>
            Tell Us More About
            <span>
              <FaChevronDown className='inline text-sm ml-2' />
            </span>
          </div>

          {showCharacteristicsSection && (
            <>
              <div className='ml-4 flex items-center mb-3'>
                <label className='mr-4 w-1/5'>Construction</label>
                <Dropdown
                  placeholder='Please Select An Option'
                  options={constructionOptions}
                  //   selectedOption={selectedOption}
                  //   setSelectedOption={setSelectedOption}
                  setConstructionSelected={setConstructionSelected}
                />
              </div>

              {constructionSelected && (
                <div className='ml-4 flex items-center mb-3'>
                  <label className='mr-4 w-1/5'>Gender or life stage</label>
                  <Dropdown
                    placeholder='Please Select An Option'
                    options={genderOptions}
                    setGenderSelected={setGenderSelected}
                  />
                </div>
              )}

              {genderSelected && (
                <div className='ml-4 flex items-center mb-3'>
                  <label className='mr-4 w-1/5'>Composition</label>
                  <Dropdown
                    placeholder='Composition'
                    options={compositionOptions}
                    setScheduleBVisible={setScheduleBVisible}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {scheduleBVisible && <ScheduleB />}
    </section>
  );
};

export default HSNClassification;
