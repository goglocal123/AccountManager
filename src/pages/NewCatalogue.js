import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import SCtrCatalogueTable from '../components/NewCatalogue/SCtrCatalogueTable';
import SearchItem from '../components/NewCatalogue/SearchItem';

const NewCatalogue = ({ catalogItems }) => {
  const [catalogNameQuery, setCatalogNameQuery] = useState('');
  const [countryQuery, setCountryQuery] = useState('');

  return (
    <div className='p-4'>
      {catalogItems.length === 0 && (
        <div className='h-screen w-full bg-hero-pattern bg-cover flex items-center justify-center'>
          <NavLink
            to='/new-catalogue-form'
            className='px-6 py-4 bg-primary text-white rounded-xl'
          >
            Create New Catalogue
          </NavLink>
        </div>
      )}

      <SearchItem
        setCatalogNameQuery={setCatalogNameQuery}
        setCountryQuery={setCountryQuery}
      />

      <SCtrCatalogueTable
        catalogItems={catalogItems}
        catalogNameQuery={catalogNameQuery}
        countryQuery={countryQuery}
      />
    </div>
  );
};

export default NewCatalogue;
