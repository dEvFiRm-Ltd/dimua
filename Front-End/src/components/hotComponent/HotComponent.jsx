import React from 'react';
import url from '../core/core';

function HotComponent() {
  return (
    <section className='container flex flex-row m-0'>
      <div className='w-1/3 px-8 rounded-md block my-16'>
        <img
          src={`${url}/img/sale01.jpg`}
          alt=''
          className='w-full h-full block overflow-hidden'
        />
      </div>
      <div className='w-1/3 px-8 rounded-md block my-16'>
        <img
          src={`${url}/img/sale02.jpg`}
          alt=''
          className='w-full h-full block overflow-hidden'
        />
      </div>
      <div className='w-1/3 px-8 rounded-md block my-16'>
        <img
          src={`${url}/img/sale03.jpg`}
          alt=''
          className='w-full h-full block overflow-hidden'
        />
      </div>
    </section>
  );
}

export default HotComponent;
