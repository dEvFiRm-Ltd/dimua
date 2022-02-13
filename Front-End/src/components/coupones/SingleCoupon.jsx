import React from 'react';

function SingleCoupon() {
  return (
    <div className='flex rounded-md border border-solid border-base flex-row w-[310px] h-[130px] '>
      <div className='flex flex-col justify-center items-center w-1/3 h-full '>
        <h3>LVLM002</h3>
        <p className='font-semibold'>HSD: 20/09</p>
      </div>
      <div className='flex flex-col justify-start items-start w-2/3 h-full p-12 '>
        <h3 className='text-cyan'>20% Off</h3>
      </div>
    </div>
  );
}

export default SingleCoupon;
