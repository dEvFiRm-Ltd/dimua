import React from 'react';
import { useState } from 'react/cjs/react.development';
import Evaluate from './Evaluate';
// import { useState } from 'react/cjs/react.production.min';
import Location from './Location';

function FilterBar() {
  const [click, setClick] = useState(true);
  return (
    <div className='flex flex-wrap w-full bg-white '>
      <div className='px-16 flex-col '>
        <h3 className='my-12 leading-[120%] font-semibold '>Product filter</h3>
        <div className='pb-[30px] '>
          <h5 className='leading-[120%] mb-12'>Delivery Location</h5>
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
              class={` ${
                click ? '-rotate-90' : 'rotate-90'
              }  ml-10 fa-solid transition fa-angle-left`}
            ></i>
          </button>
        </div>
        <div className='pb-[30px] '>
          <h5 className='leading-[120%] mb-12'>Evaluate</h5>
          {/* checkbox */}
          <Evaluate classes='mb-12' stars='5' />
          <Evaluate classes='mb-12' stars='4' />
          <Evaluate classes='mb-12' stars='3' />
        </div>
      </div>
    </div>
  );
}

export default FilterBar;
