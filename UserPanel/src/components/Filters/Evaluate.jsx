import React from 'react';

function Evaluate({ classes, stars }) {
  const star = [];
  for (let i = 0; i < stars; i++) {
    star.push(<i key={i * 5} className='text-yellow fa-solid fa-star'></i>);
  }
  if (stars < 5) {
    for (let i = 0; i < 5 - stars; i++) {
      star.push(<i key={i * 2 + 1} className='text-gray fa-solid fa-star'></i>);
    }
  }
  return (
    <div className={`relative ${classes}`}>
      <input
        type='checkbox'
        name={`star${stars}Count`}
        id={`star${stars}Count`}
        className='hidden peer'
      />
      <label
        htmlFor={`star${stars}Count`}
        className='w-full h-full border border-solid border-[#dddddd] rounded-lg bg-ash pl-13 pr-[42px] py-4 flex flex-row items-center justify-between peer-checked:border-green cursor-pointer '
      >
        <span className='mr-6'>{star}</span>
        <h5 className='font-normal'>From {stars} Stars</h5>
      </label>
      <i className=' text-green absolute right-14 top-10 fa-solid fa-check scale-0 opacity-0 transition-all ease-in-out peer-checked:scale-[1] peer-checked:opacity-[1] '></i>
    </div>
  );
}

export default Evaluate;
