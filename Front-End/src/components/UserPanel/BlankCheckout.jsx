import React from 'react';
import { Link } from 'react-router-dom';
import url from './core/core';

function BlankCheckout() {
  return (
    <div className='flex-wrap w-[50%] pr-6 '>
      <div className='flex flex-col w-full h-[950px] p-16 bg-white overflow-y-scroll pt-[80px] '>
        <div className='flex items-center flex-col w-full mb-32 '>
          <img
            src={`${url}/img/cart.svg`}
            alt=''
            className='w-[328px] h-[129px] mb-16 '
          />
          <h3>You have no items in your shopping cart</h3>
        </div>
        <Link
          to='/'
          className=' w-full text-green py-12 border-green rounded border text-center transition-all hover:text-white hover:border-white hover:bg-green '
        >
          Home page
        </Link>
      </div>
    </div>
  );
}

export default BlankCheckout;
