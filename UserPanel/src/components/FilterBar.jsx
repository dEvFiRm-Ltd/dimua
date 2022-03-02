import React from 'react';
import { useState } from 'react/cjs/react.development';
// import { useState } from 'react/cjs/react.production.min';
import Evaluate from './Filters/Evaluate';
import Location from './Filters/Location';
import Prices from './Filters/Prices';

function FilterBar() {
  const [click, setClick] = useState(true);
  return (
    <div className='flex flex-wrap w-full bg-white '>
      <div className='px-16 flex-col '>
        <h3 className='my-12 leading-120 font-semibold '>Product filter</h3>
        <div className='pb-30 '>
          <h5 className='leading-120 mb-12'>Delivery Location</h5>
          {/* checkbox */}
          <Location data='dhaka' type='checkbox' classes='mb-12' />
          <Location data='narayanganj' type='checkbox' classes='mb-12' />
          <Location data='meymenshingh' type='checkbox' classes='mb-12' />
          <Location data='shylet' type='checkbox' />
          <button
            className='text-green border-0 capitalize '
            onClick={() => setClick(!click)}
          >
            {' '}
            see more{' '}
            <i
              className={` ${
                click ? '-rotate-90' : 'rotate-90'
              }  ml-10 fa-solid transition fa-angle-left`}
            ></i>
          </button>
        </div>
        <div className='pb-30 '>
          <h5 className='leading-120 mb-12'>Evaluate</h5>
          {/* checkbox */}
          <Evaluate classes='mb-12' stars='5' />
          <Evaluate classes='mb-12' stars='4' />
          <Evaluate classes='mb-12' stars='3' />
        </div>
        <div className='pb-30 '>
          <h5 className='leading-120 mb-12'>Evaluate</h5>
          {/* checkbox */}
          <Prices classes='mb-12' minPrice='500' />
          <Prices classes='mb-12' minPrice='500' maxPrice='1000' />
          <Prices classes='mb-19' maxPrice='5000' />
          <h5 className='leading-120 mb-10'>Choose Price Range</h5>
          <div className='flex flex-row justify-between items-center mb-19'>
            <input
              type='text'
              className='w-[48%] h-full border border-ash'
              placeholder='Min. Price'
            />
            <p className=''>-</p>
            <input
              type='text'
              className='w-[48%] h-full border border-ash'
              placeholder='Max. Price'
            />
          </div>
          <button className='w-[48%] rounded py-6 text-center border-green text-green border flex justify-center items-center ml-auto'>
            {' '}
            Apply
          </button>
        </div>
        <div className='pb-30 '></div>
      </div>
    </div>
  );
}

export default FilterBar;
