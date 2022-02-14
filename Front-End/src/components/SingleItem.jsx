import React from 'react';
import { Link } from 'react-router-dom';

function SingleItem({ content, classes }) {
  return (
    <Link
      to={`/${content.slug}`}
      className={`bg-white rounded-lg block ${classes}`}
    >
      <div className='rounded-lg p-16 w-full h-[180px] flex justify-center items-center '>
        <img src={content.image} alt='' className='' />
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
      </div>
    </Link>
  );
}

export default SingleItem;
