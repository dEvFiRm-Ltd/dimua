import React from 'react';
import url from '../components/core/core';

function OrderSuccess() {
  return (
    <section className='container m-0 py-16 flex'>
      <div className='w-full bg-white p-[32px] flex flex-col items-center'>
        <div className='w-[110px] h-[110px] rounded-[50%] mb-[30px] '>
          <img src={`${url}/img/success.png`} alt='' className='' />
        </div>
        <h3 className='mb-16 leading-[120%] '>Successfully order complete</h3>
        <h5 className='mb-16 leading-[120%] '>
          Buyer will be called within 24 hours to confirm order
        </h5>
        <button className='btngreen px-[32px]'>back to the home page</button>
      </div>
    </section>
  );
}

export default OrderSuccess;
