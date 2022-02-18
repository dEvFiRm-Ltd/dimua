import React from 'react';

function TimeLaps() {
  return (
    <h3 className='font-[120%] duration flex flex-row '>
      <span className=' text-white mr-8 p-[5.5px] bg-red rounded-md '>00</span>
      <span className='mr-8 text-red my-auto'>:</span>
      <span className=' font-[120%] text-white mr-8 p-[5.5px] bg-red rounded-md '>
        00
      </span>
      <span className='mr-8 text-red my-auto'>:</span>
      <span className=' font-[120%] text-white p-[5.5px] bg-red rounded-md '>
        00
      </span>
    </h3>
  );
}

export default TimeLaps;
