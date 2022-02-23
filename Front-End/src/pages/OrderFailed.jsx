import React from 'react';
import url from '../components/UserPanel/core/core';

function OrderFailed() {
  return (
    <section className='container my-0 py-16 flex'>
      <div className='w-full bg-white p-32 flex flex-col items-center'>
        <div className='w-[110px] h-[110px] rounded-[50%] mb-30 '>
          <img src={`${url}/img/failed.png`} alt='' className='' />
        </div>
        <h3 className='mb-16 leading-120 '>Opss! Order failed</h3>
        <h5 className='mb-16 leading-120 font-semibold '>
          Please check your order information
        </h5>
        <button className='btngreen  px-32'>back to the home page</button>
      </div>
    </section>
  );
}

export default OrderFailed;
