import React from 'react';

function SectionTitle({ title, duration, slug, background }) {
  return (
    <div className='p-16 bg-transparent flex content-between'>
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
    </div>
  );
}

export default SectionTitle;
