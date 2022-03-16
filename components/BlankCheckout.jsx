import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function BlankCheckout() {
  return (
    <div className='flex-wrap w-[50%] pr-6 '>
      <div className='flex flex-col w-full h-[950px] p-16 bg-white overflow-y-scroll pt-[80px] '>
        <div className='flex items-center flex-col w-full relative mb-32 '>
          <Image
            src={`/img/cart.svg`}
            alt=''
            layout='fill'
            className='w-[328px] h-129 mb-16 '
          />
          <h3>You have no items in your shopping cart</h3>
        </div>
        <Link
          href='/'
          passHref
          className=' w-full text-green py-12 border-green rounded border text-center transition-all hover:text-white hover:border-white hover:bg-green '
        >
          <a>Home page</a>
        </Link>
      </div>
    </div>
  );
}

export default BlankCheckout;
