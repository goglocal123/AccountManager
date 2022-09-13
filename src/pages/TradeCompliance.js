import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

// import template from '../../public/files/ExcelTemplate.xlsx';
import template from '../files/ExcelTemplate.xlsx';

import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';

const config = {
  url: 'https://run.mocky.io/v3/d0fe3fd6-d8cb-4572-9815-8f69534e42c2',
  headers: {},
};

const TradeCompliance = () => {
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);

  //   const fileUploadHandler = async ({ target: { files } }) => {
  //     console.log(files[0]);
  //     let data = new FormData();
  //     data.append('file', files[0]);
  //     // console.log(data);
  //     const options = {
  //       onUploadProgress: (progressEvent) => {
  //         const { loaded, total } = progressEvent;
  //         let percent = Math.floor((loaded * 100) / total);
  //         console.log(`${loaded}kb of ${total}kb | ${percent}%`);
  //       },
  //     };

  //     try {
  //       const res = await axios.post(
  //         'https://run.mocky.io/v3/d0fe3fd6-d8cb-4572-9815-8f69534e42c2',
  //         data
  //       );
  //       console.log(res);
  //     } catch (err) {
  //       console.log(err.response);
  //     }
  //   };

  const changeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  };

  const handleSubmission = async () => {
    const formData = new FormData();
    formData.append('File', selectedFile);

    try {
      const res = await axios.post(
        'https://freeimage.host/api/1/upload?key=6d207e02198a847aa98d0a2a901485a5',
        {
          body: formData,
        }
      );
      const data = await res.json();
      console.log('Success ', data);
    } catch (err) {
      console.log('Error ', err);
    }
  };

  return (
    <section className='p-4 h-screen flex flex-col'>
      <header className='flex items-center justify-between '>
        <div className='font-bold text-3xl'>Tax Engine</div>
        <Link
          to={template}
          target='_blank'
          download='Template.xlsx'
          className='p-2 bg-primary text-white flex items-center rounded-lg'
        >
          <FaDownload className='inline mr-2' />
          <span>Excel Template</span>
        </Link>
      </header>
      <div className=' grow shrink basis-auto flex items-center justify-center'>
        <div className='p-4 bg-primary text-white border rounded-xl'>
          <p>Upload your file here</p>
          <ul className='list-disc p-4 [&>*]:mb-3'>
            <li>Excel should not have a blank row in between</li>
            <li>Excel should not have an empty value in columns specified.</li>
          </ul>
          <div className='flex flex-col items-center gap-4'>
            <input
              type='file'
              name='file'
              className={`${
                isFilePicked ? 'bg-green-300 text-black' : ''
              } hover:cursor-pointer w-2/3 p-2 border rounded-xl`}
              onChange={changeHandler}
            />
            <button
              className='px-4 py-2 border border-2 border-secondary rounded-xl'
              onClick={handleSubmission}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeCompliance;
