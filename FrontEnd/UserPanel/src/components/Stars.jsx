import React from 'react';

function Stars({ count }) {
  const stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<i key={i} className='fa-solid fa-star text-yellow'></i>);
  }
  if (count < 5) {
    for (let i = 0; i < 5 - count; i++) {
      stars.push(<i className='text-gray fa-solid fa-star'></i>);
    }
  }
  return (
    <div className='flex flex-row justify-between '>
      <div className='flex flex-row '>{stars}</div>
      <div className='relative w-[209px] h-6'>
        <div className='absolute top-[7px] left-8 w-full bg-[#c4c4c4] h-full rounded-[50px] '></div>
        <div className='absolute top-[7px] left-8 w-[40%] bg-yellow h-full rounded-[50px] '></div>
      </div>
    </div>
  );
}

export default Stars;
