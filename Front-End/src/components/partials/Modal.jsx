import React from 'react';

function Modal() {
  return (
    <section className='fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center'>
      <div className='w-[375px] py-[21px] bg-white rounded-xl flex flex-col '>
        <h1 className=' text-center leading-[120%] px-16 pb-16 border-b border-[#ebebeb] '>
          20% off product price
        </h1>
      </div>
    </section>
  );
}

export default Modal;
