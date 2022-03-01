import React from 'react';

function ProductAttributes({ text, classes }) {
  return (
    <div
      className={`flex flex-row mr-6 mb-6 last:mr-0 relative w-[112px] h-[46px]`}
    >
      <input
        type='radio'
        name={'attributes'}
        id={text}
        className='hidden peer'
      />
      <i class='fa-solid fa-check z-20 absolute text-white right-[5px] top-[0.5px] text-[10px] peer-checked:block peer-checked:opacity-[1] '></i>
      <span className='absolute right-0 top-0 border border-solid border-green rounded-bl rounded-tr transition-all ease-in-out w-[18px] z-10 h-12 bg-green hidden opacity-0 peer-checked:block peer-checked:opacity-[1] '></span>
      <label
        className=' py-8 px-10 w-full border border-ash rounded-sm capitalize peer-checked:border-green'
        htmlFor={text}
      >
        {text}
      </label>
    </div>
  );
}

export default ProductAttributes;
