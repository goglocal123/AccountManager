import React from 'react';
import { CSVLink } from 'react-csv';
import { FaDownload } from 'react-icons/fa';

import { catalogItems } from './catalog-data';

const DownloadCatalogue = () => {
  const camelCase = (str) => {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
  };

  const filterColumns = (data) => {
    // Get column names
    const columns = Object.keys(data[0]);
    let headers = [];
    columns.forEach((col, idx) => {
      //   if (col !== "firstname") {
      // OR if (idx !== 0)
      headers.push({ label: camelCase(col), key: col });
      //   }
    });

    return headers;
  };

  return (
    <>
      <CSVLink
        className='px-3 py-2 transition ease-in-out rounded-lg bg-primary hover:scale-105 text-white duration-300'
        data={catalogItems}
        headers={filterColumns(catalogItems)}
        filename={'Catalog.csv'}
      >
        Bulk Download{' '}
        <span>
          <FaDownload className='ml-2 inline text-2xl' />
        </span>
      </CSVLink>
    </>
  );
};

export default DownloadCatalogue;
