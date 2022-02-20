import React from 'react';

function Prices({ classes, minPrice, maxPrice }) {
  return (
    <div className={`relative ${classes}`}>
      <input
        type='checkbox'
        name={`price${minPrice}${maxPrice}Count`}
        id={`price${minPrice}${maxPrice}Count`}
        className='hidden peer'
      />
      <label
        htmlFor={`price${minPrice}${maxPrice}Count`}
        className='w-full h-full border border-solid border-[#dddddd] rounded-lg bg-ash pl-13 pr-[42px] py-4 flex flex-row items-center justify-between peer-checked:border-green cursor-pointer '
      >
        <h5 className='font-normal'>
          {' '}
          {!maxPrice
            ? `Avobe ${minPrice}`
            : !minPrice
            ? `Below ${maxPrice}`
            : ` From ${minPrice} to ${maxPrice}`}{' '}
        </h5>
      </label>
      <i class=' text-green absolute right-[14px] top-10 fa-solid fa-check scale-0 opacity-0 transition-all ease-in-out peer-checked:scale-[1] peer-checked:opacity-[1] '></i>
    </div>
  );
}

export default Prices;
