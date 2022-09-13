import React, { useState } from 'react';

import './Sidebar.css';

import { NavLink } from 'react-router-dom';
import logoWhite from '../assets/logo-white.png';
import {
  FaUsers,
  FaUser,
  FaHandshake,
  FaUserShield,
  FaAddressBook,
  FaBook,
  FaChartPie,
  FaMoneyCheckAlt,
  FaCalendarAlt,
  FaCaretDown,
} from 'react-icons/fa';

const Sidebar = () => {
  const [tradePagesVisible, setTradePagesVisible] = useState(false);

  const iconClasses = 'hidden md:inline mr-3 text-lg';
  const links = [
    {
      id: 1,
      name: 'Access Control',
      path: '/access-control',
      icon: <FaUserShield className={iconClasses} />,
    },
    {
      id: 9,
      name: 'Trade Compliance',
      path: '/tax-engine',
      icon: <FaHandshake className={iconClasses} />,
    },
    {
      id: 10,
      name: 'HSN Classification',
      path: '/HSN-classification',
    },
    {
      id: 11,
      name: 'Tax Engine',
      path: '/tax-engine',
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
      icon: <FaAddressBook className={iconClasses} />,
    },
    {
      id: 5,
      name: 'Shipping Rules',
      path: '/allOrders/shipping-rules',
      // icon: <FaBook className={iconClasses} />,
    },
    {
      id: 6,
      name: 'Payments',
      path: '/payments',
      icon: <FaMoneyCheckAlt className={iconClasses} />,
    },
    {
      id: 7,
      name: 'Catalogue',
      path: '/catalogue',
      icon: <FaChartPie className={iconClasses} />,
    },
    {
      id: 71,
      name: 'Upload',
      path: '/catalogue/upload',
    },
    {
      id: 8,
      name: 'Tickets',
      path: '/allTickets',
      icon: <FaCalendarAlt className={iconClasses} />,
    },
  ];

  const showTradePages = () => {
    setTradePagesVisible(!tradePagesVisible);
  };

  return (
    <aside className='sidebar overflow-y-auto bg-primary h-full fixed w-1/5'>
      <div>
        <img src={logoWhite} className='p-4' alt='Logo' />
      </div>

      <nav>
        <ul className='text-gray-400 font-extralight text-md'>
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className='block relative md:mx-3 px-2 py-3 rounded-xl hover:text-white'
              style={({ isActive }) => ({
                // backgroundColor: isActive ? 'rgba(255, 179, 89,0.3)' : '',
                color: isActive ? 'white' : '',
              })}
            >
              <span>
                {link.icon} {link.name}{' '}
                {link.id === 9 && (
                  <FaCaretDown
                    className='inline float-right'
                    onClick={showTradePages}
                  />
                )}
              </span>
            </NavLink>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
