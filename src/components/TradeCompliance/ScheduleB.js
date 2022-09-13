import React from 'react';

const ScheduleB = () => {
  return (
    <div className='bg-white border rounded-lg'>
      <h3 className='font-semibold text-lg text-center py-4 border-b'>
        Schedule B
      </h3>
      <div className='p-4'>
        <p>
          Please read all 10-digit descriptions to find the one that best
          matches your product
        </p>
        <div className='my-6 text-center'>
          <h2 className='text-2xl mb-3'>
            U.S. Census Bureau - Foreign Trade Schedule B (2022)
          </h2>
          <h3 className='text-xl'>Chapter 61</h3>
          <h2 className='text-xl'>
            CHAPTER 61 - ARTICLES OF APPAREL AND CLOTHING ACCESSORIES, KNITTED
            OR CROCHETED
          </h2>
        </div>
        <div className='border mb-4'>
          <div className='p-2 grid grid-cols-3 border-b'>
            <div className='uppercase'>Schedule B Number</div>
            <div className='uppercase lg:-ml-28'>Description</div>
            <div className='uppercase ml-32'>UOM</div>
          </div>

          <div className='p-2 grid grid-cols-3 border-b'>
            <div>61.03</div>
            <div className='lg:-ml-28'>
              Men's or boys' suits, ensembles, suit-type jackets, blazers,
              trousers, bib and brace overalls, breeches and shorts (other than
              swimwear), knitted or crocheted:
            </div>
            <div className='uppercase ml-32'></div>
          </div>

          <div className='p-2 grid grid-cols-3 border-b'>
            <div></div>
            <div className='lg:-ml-28'>
              {' '}
              - Trousers, bib and brace overalls, breeches and shorts:
            </div>
            <div className='uppercase ml-32'></div>
          </div>

          <div className='p-2 grid grid-cols-3'>
            <div>6103.41.0000</div>
            <div className='lg:-ml-28'>-- Of wool or fine animal hair</div>
            <div className=' ml-32'>Doz.,kg</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleB;
