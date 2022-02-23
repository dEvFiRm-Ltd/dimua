import React from 'react';
import Feedback from '../components/UserPanel/Feedback';
import Stars from '../components/UserPanel/Stars';

function BrandReviews() {
  return (
    <>
      <div className='my-16 pt-16 pb-[1px] bg-white flex flex-row justify-around'>
        <div className='flex flex-col'>
          <h3 className='font-normal mb-16'>Product Reviews</h3>
          <div className='flex flex-row'>
            <div className='flex flex-row mr-16'>
              <h2 className='text-30 font-semibold text-[#767676] '>5/</h2>
              <h2 className='text-24 font-semibold text-[#767676] '>5</h2>
            </div>
            <div className='flex flex-row text-yellow '>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star-half'></i>
            </div>
          </div>
          <h3 className='leading-[230%] font-normal '>(20 Reviews)</h3>
        </div>
        <div className='flex flex-col'>
          <Stars count={5} />
          <Stars count={4} />
          <Stars count={3} />
          <Stars count={2} />
          <Stars count={1} />
        </div>
      </div>
      <div className=''>
        <Feedback />
        <Feedback />
        <Feedback />
      </div>
    </>
  );
}

export default BrandReviews;
