import React from 'react';
import { Link } from 'react-router-dom';

function SingleCoupon({ classes }) {
  return (
    <div
      className={`flex rounded-md border border-solid border-base flex-row w-[310px] ${classes} `}
    >
      <div className='flex flex-col justify-center items-center w-1/3 h-full  my-auto'>
        <h3>LVLM002</h3>
        <p className='font-semibold'>HSD: 20/09</p>
      </div>
      <div className='flex flex-col justify-start items-start w-2/3 h-full p-12'>
        <h3 className='text-cyan mb-8'>20% Off</h3>
        <div className='w-full whitespace-nowrap '>
          <p className='text-black mb-8 text-ellipsis overflow-hidden '>
            Coolmate Wears Beautiful Life Quality - Men's Clothing Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nostrum, sit.
          </p>
        </div>
        <div className='flex flex-row items-center w-full'>
          <img
            src={`${process.env.PUBLIC_URL}/img/clock.svg`}
            alt=''
            className='mr-4'
          />
          <h6 className=''>2 days left</h6>
          <Link to={`/`} className='btnGreen ml-auto px-10 py-6'>
            buy now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleCoupon;