import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import url from '../components/core/core';

function Checkout() {
  return (
    <>
      <Breadcrumb />
      <section className='container pb-16 flex flex-row'>
        <div className='flex-wrap w-[50%] pr-6 '>
          <div className='flex flex-col w-full h-[942px] p-[24px] bg-white overflow-y-scroll '>
            <div className='mb-20 flex justify-start items-center '>
              <div className='w-[35px] h-[35px] rounded-[50%] mr-16 overflow-hidden'>
                <img
                  src={`${url}/img/McDonalds-Icon.png`}
                  alt=''
                  className='w-full h-full'
                />
              </div>
              <h2 className='leading-[150%] font-semibold'>McDonalds-Icon</h2>
            </div>
            <div className='mb-20 flex flex-row '></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Checkout;
