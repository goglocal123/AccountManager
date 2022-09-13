import React from 'react';

import profImg from '../../assets/displaypic.jpg';
import { BiSupport } from 'react-icons/bi';

const Header = ({ title }) => {
  return (
    <header className='flex items-center justify-between text-primary'>
      <h3 className='font-semibold text-base lg:text-3xl'>{title}</h3>
      <div className='flex items-center'>
        <BiSupport className='text-base lg:text-3xl' />
        <span className='mx-3 text-base lg:text-2xl font-semibold'>
          Account Manager
        </span>
        <div>
          <img src={profImg} className='w-6 h-6 rounded-full' alt='Manager' />
        </div>
      </div>
    </header>
  );
};

export default Header;
