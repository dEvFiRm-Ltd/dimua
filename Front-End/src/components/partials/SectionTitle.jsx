import React from 'react';
import { Link } from 'react-router-dom';
import TimeLaps from '../TimeLaps';

function SectionTitle({ title, duration, slug, background }) {
  return (
    <div className='py-16 bg-transparent flex items-center'>
      <div className='flex flex-row items-center '>
        <h3
          className={`pr-16 capitalize ${
            background ? 'text-white' : 'text-black'
          }`}
        >
          {title}
        </h3>
        {duration && <TimeLaps />}
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
