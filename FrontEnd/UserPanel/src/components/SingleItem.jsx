import React from 'react';
import { Link } from 'react-router-dom';

function SingleItem({ content, size, showDiscount }) {
  return (
    <Link
      to={`/${content.slug}`}
      className={`bg-white rounded-lg h-[${size}] border-[#E5EBED] border block transition-all duration-300 ease-in-out hover:shadow-[1px_1px_9px_0px_rgba(0,0,0,0.75)] `}
    >
      <div
        className={`rounded-lg p-16 w-full flex justify-center items-center `}
      >
        <img src={content.image} alt='' className='h-full' />
      </div>
      <div className='p-16 w-full flex flex-col '>
        <h6 className='text-black capitalize mb-4'>{content.title}</h6>
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
