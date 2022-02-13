import React from 'react';
import { Link } from 'react-router-dom';
import url from './core/core';

function HotComponent() {
  return (
    <section className='container flex flex-row m-0 py-16 pb-8'>
      <Link
        to='/'
        className='w-1/3 bg-gray h-[130px] mr-8 rounded-md block overflow-hidden  '
      >
        <img
          src={`${url}/img/sale01.jpg`}
          alt=''
          className='w-full h-full block object-cover hover:scale-105 transition-all'
        />
      </Link>
      <Link
        to='/'
        className='w-1/3 bg-gray h-[130px] mx-8 rounded-md block overflow-hidden '
      >
        <img
          src={`${url}/img/sale02.jpg`}
          alt=''
          className='w-full h-full block object-cover hover:scale-105 transition-all'
        />
      </Link>
      <Link
        to='/'
        className='w-1/3 bg-gray h-[130px] ml-8 rounded-md block overflow-hidden '
      >
        <img
          src={`${url}/img/sale03.jpg`}
          alt=''
          className='w-full h-full block object-cover hover:scale-105 transition-all'
        />
      </Link>
    </section>
  );
}

export default HotComponent;
