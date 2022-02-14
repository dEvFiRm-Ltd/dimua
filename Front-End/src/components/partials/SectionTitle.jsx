import React from 'react';
import { Link } from 'react-router-dom';

function SectionTitle({ title, duration, slug, background }) {
  return (
    <div className='py-16 bg-transparent flex items-center'>
      <div className='flex flex-row items-center '>
        <h3
          className={`pr-16 capitalize ${
            background === 'white' ? `text-black` : `text-white`
          }`}
        >
          {title}
        </h3>
        {duration && (
          <h3 className='font-[120%] duration flex flex-row '>
            <span className=' text-white mr-8 p-[5.5px] bg-red rounded-md '>
              00
            </span>
            <span className='mr-8 text-red my-auto'>:</span>
            <span className=' font-[120%] text-white mr-8 p-[5.5px] bg-red rounded-md '>
              00
            </span>
            <span className='mr-8 text-red my-auto'>:</span>
            <span className=' font-[120%] text-white p-[5.5px] bg-red rounded-md '>
              00
            </span>
          </h3>
        )}
      </div>
      {slug && (
        <Link to={`/${slug}`} className=' ml-auto'>
          <i
            className={`fa-solid fa-chevron-right ${
              background ? 'text-white' : 'text-black'
            }`}
          ></i>
        </Link>
      )}
    </div>
  );
}

export default SectionTitle;
