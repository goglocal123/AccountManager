import React from 'react';
import profileImg from '../assets/profile.png';
import { AiOutlineCalendar, AiOutlineMail } from 'react-icons/ai';
import { FiPhone, FiUserCheck } from 'react-icons/fi';
import { MdLogout, MdEdit } from 'react-icons/md';

import Switch from '../UI/Switch/Switch';

const Profile = () => {
  const iconClasses = 'mr-2 inline text-2xl';
  const spanClasses = 'text-black font-semibold';

  return (
    <section className='p-10 relative'>
      <h1
        className='mb-4 text-3xl font-semibold text-primary
      '
      >
        Profile
      </h1>
      <div className='relative'>
        <img
          src={profileImg}
          className=' mb-6 w-36 h-auto rounded-full'
          alt='Profile'
        />
        <button className='absolute bottom-0 left-24'>
          <MdEdit className='p-1 inline text-primary text-2xl bg-white rounded-full shadow-md' />
        </button>
      </div>
      <div className='mb-10 p-4 flex rounded-lg shadow-lg'>
        <div>
          <p className='mb-4 text-xl'>Datian Tien Dang</p>
          <p className='text-primary mb-4'>
            <AiOutlineCalendar className={iconClasses} /> Date of birth :{' '}
            <span className={spanClasses}>12-11-1999</span>
          </p>
          <p className='text-primary mb-4'>
            <AiOutlineMail className={iconClasses} />
            Mail : <span className={spanClasses}>anhdt.des@gmail.com</span>
          </p>
          <p className='text-primary'>
            <FiPhone className={iconClasses} />
            Phone : <span className={spanClasses}>+1 987459893</span>
          </p>
        </div>
        <div className='pr-32'>
          <p className='text-primary ml-16'>
            <FiUserCheck className={iconClasses} />
            Account ID: <span className={spanClasses}>GGC25C73</span>
          </p>
        </div>
      </div>
      <div className='text-primary'>
        Two step authentication: <Switch />
      </div>
      <button className='absolute py-1 bg-secondary text-primary font-semibold rounded-md w-1/3 -bottom-16'>
        <MdLogout className={iconClasses} />
        Log Out
      </button>
    </section>
  );
};

export default Profile;
