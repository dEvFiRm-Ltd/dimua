import React from 'react';
import CheckoutItem from './CheckoutItem';
import Image from 'next/image';

function ProductCheckout() {
  return (
    <div className='flex-wrap w-[50%] pr-6 '>
      <div className='flex flex-col w-full h-[950px] p-24 bg-white overflow-y-scroll '>
        <div className='mb-20 flex justify-start items-center '>
          <div className='w-[35px] h-[35px] rounded-[50%] mr-16 overflow-hidden'>
            <Image
              layout='fill'
              src={`/img/McDonalds-Icon.png`}
              alt=''
              className='w-full h-full'
            />
          </div>
          <h2 className='leading-150 font-semibold'>McDonalds</h2>
        </div>
        <CheckoutItem />
        <CheckoutItem />
      </div>
    </div>
  );
}

export default ProductCheckout;
