import React, { useState } from 'react';

import {
  FaBars,
  FaTimes,
  FaUserShield,
  FaUser,
  FaUsers,
  FaBook,
  FaChartPie,
  FaCalendarAlt,
} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

import logoWhite from '../../assets/logo-white.png';

const iconClasses = 'inline';
const links = [
  {
    id: 1,
    name: 'Access Control',
    path: '/access-control',
    icon: <FaUserShield className={iconClasses} />,
  },
  // {
  //   id: 2,
  //   name: 'Profile',
  //   path: '/profile',
  //   icon: <FaUser className={iconClasses} />,
  // },
  {
    id: 3,
    name: 'Sellers',
    path: '/allSellers',
    icon: <FaUsers className={iconClasses} />,
  },
  {
    id: 4,
    name: 'Orders',
    path: '/allOrders',
    icon: <FaBook className={iconClasses} />,
  },
  {
    id: 5,
    name: 'Shipping Rules',
    path: '/allOrders/shipping-rules',
    icon: <FaBook className={iconClasses} />,
  },
  {
    id: 6,
    name: 'Payments',
    path: '/payments',
    icon: <FaBook className={iconClasses} />,
  },
  {
    id: 7,
    name: 'Catalogue',
    path: '/catalogue',
    icon: <FaChartPie className={iconClasses} />,
  },
  {
    id: 8,
    name: 'Tickets',
    path: '/allTickets',
    icon: <FaCalendarAlt className={iconClasses} />,
  },
];

const MobileNavbar = () => {
  const [menuIsShown, setMenuIsShown] = useState(false);

  const showMenuHandler = () => {
    setMenuIsShown(!menuIsShown);
  };

  return (
    <div className='relative'>
      <div className='p-4 bg-primary flex items-center justify-between'>
        <img src={logoWhite} className=' w-1/4' alt='Logo' />

        {!menuIsShown ? (
          <FaBars
            className='text-white text-xl hover:cursor-pointer hover:text-secondary'
            onClick={showMenuHandler}
          />
        ) : (
          <FaTimes
            className='text-white text-xl hover:cursor-pointer hover:text-secondary'
            onClick={showMenuHandler}
          />
        )}
      </div>

      {menuIsShown && (
        <ul className='absolute z-50 bg-primary w-full text-gray-300 font-extralight text-sm transition duration-700 ease-in-out'>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className='mx-3 mb-1 block px-2 py-4 rounded-xl hover:bg-secondary_a'
              style={({ isActive }) => ({
                backgroundColor: isActive ? 'rgba(255, 179, 89,0.3)' : '',
                color: isActive ? 'white' : '',
              })}
              onClick={showMenuHandler}
            >
              <span>
                <span className='mr-2'>{link.icon}</span>
                {link.name}
              </span>
            </NavLink>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileNavbar;
