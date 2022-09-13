import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import CatalogueTable from '../components/Catalogue/CatalogueTable';
import DownloadCatalogue from '../components/Catalogue/DownloadCatalogue';
import Search from '../components/Catalogue/Search';

import Header from '../UI/Header/Header';

const Catalogue = () => {
  const [idQuery, setIdQuery] = useState('');
  const [emailNameQuery, setEmailNameQuery] = useState('');

  return (
    <section className='p-4'>
      <Header title='Catalogue' />

      <Breadcrumb levelOne='Catalogue' />

      <Search setIdQuery={setIdQuery} setEmailNameQuery={setEmailNameQuery} />

      <CatalogueTable idQuery={idQuery} emailNameQuery={emailNameQuery} />
    </section>
  );
};

export default Catalogue;
