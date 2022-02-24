import React from 'react';
import url from './core/core';

function CheckoutItem() {
  return (
    <>
      <div className='mb-20 flex flex-row justify-between'>
        <div className='flex flex-row'>
          <div className='w-[100px] h-[100px] rounded overflow-hidden mr-16 '>
            <img
              src={`${url}/img/item.jpg`}
              alt=''
              className='w-full h-full '
            />
          </div>
          <div className='flex flex-col w-[265px] justify-start '>
            <h3 className='leading-150 font-normal '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, rerum?{' '}
            </h3>
          </div>
        </div>
      </div>
      <div className='flex justify-between'>
        <h5 className='leading-140 font-semibold '>Transport Fee</h5>
        <h5 className='leading-140 font-semibold '>60$</h5>
      </div>
      <div className='flex justify-between'>
        <h5 className='leading-140 font-semibold '>Unit Price</h5>
        <h5 className='leading-140 font-semibold '>90$</h5>
      </div>
      <div className='flex justify-start my-20'>
        <button className='w-30 h-30 border border-ash active:bg-slate-300 rounded-tl rounded-bl '>
          -
        </button>
        <input type='text' value='1' className='w-[45px] border-ash h-30' />
        <button className='w-30 h-30 border border-ash active:bg-slate-300 rounded-tr rounded-br '>
          +
        </button>
      </div>
    </>
  );
}

export default CheckoutItem;
