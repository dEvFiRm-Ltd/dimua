import React from 'react';
import url from '../components/UserPanel/core/core';

function OrderSuccess() {
  return (
    <section className='container my-0 py-16 flex'>
      <div className='w-full bg-white p-32 flex flex-col items-center'>
        <div className='w-[110px] h-[110px] rounded-[50%] mb-30 '>
          <img src={`${url}/img/success.png`} alt='' className='' />
        </div>
        <h3 className='mb-16 leading-120 '>Successfully order complete</h3>
        <h5 className='mb-16 leading-120 font-semibold '>
          Buyer will be called within 24 hours to confirm order
        </h5>
        <button className='btngreen  px-32'>back to the home page</button>
      </div>
    </section>
  );
}

export default OrderSuccess;
