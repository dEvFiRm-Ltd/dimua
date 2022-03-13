import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function SingleItem({ content, size, showDiscount }) {
  return (
    <Link
      passHref
      href={`/product/${content.id}`}
      className={`bg-[#F8E6E4] rounded-lg h-full  border-[#E5EBED] border block transition-all duration-300 ease-in-out hover:shadow-[1px_1px_9px_0px_rgba(0,0,0,0.75)] `}
    >
      <div
        className={`rounded-lg p-16 w-full flex justify-center items-center ${size} `}
      >
        <Image layout='fill' src={content.image} alt='' className='h-full' />
      </div>
      <div className='p-16 w-full flex flex-col '>
        <div className='w-full h-[42px] whitespace-nowrap '>
          <h6 className='text-black capitalize mb-4 text-ellipsis overflow-hidden '>
            {content.title}
          </h6>
        </div>
        <h3 className='text-black'>
          {content.currency}. {content.price - content.discount}
        </h3>
        <h3 className='text-gray relative w-fit '>
          {content.currency}. {content.price}
          <span className='absolute w-[108%] h-[2px] top-1/2 bg-gray left-[-4%] ' />
        </h3>
        {showDiscount && (
          <h5 className='text-blue'>Save: {content.discount}</h5>
        )}
      </div>
    </Link>
  );
}

export default SingleItem;
