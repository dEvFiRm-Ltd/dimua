import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './Hamburger';
import url from '../core/core';

function Navigation() {
  return (
    <section className='container bg-green flex flex-row my-0 py-0 justify-between '>
      <div className='w-[21%] flex flex-row '>
        <div className='w-[50px] h-[50px] px-12 '>
          <Hamburger />
        </div>
        <div className='w-[155px] py-10 pr-10 pl-0 '>
          <Link to='/' className='block '>
            <img src={`${url}/img/logo.svg`} alt='' className='img' />
          </Link>
        </div>
      </div>
      <div className='w-[61%] h-36 block m-12 relative '>
        <input
          type='text'
          name=''
          placeholder='Browse Everything !'
          className='w-full h-full block rounded-lg py-6 px-12 focus:border-cyan focus:outline-none focus:shadow-outline'
          id=''
        />
        <button
          type='button'
          className='absolute w-20 h-20 right-[6px] top-1/2 block -translate-y-1/2'
        >
          <img
            src={`${url}/img/navigation/search.svg`}
            alt=''
            className='img'
          />
        </button>
      </div>
      <ul className='flex flex-row'>
        <li className='my-auto'>
          <button type='button' className='p-16'>
            <img
              src={`${url}/img/navigation/cart.svg`}
              alt=''
              className='img'
            />
          </button>
        </li>
        <li className='my-auto'>
          <button type='button' className='p-16'>
            <img
              src={`${url}/img/navigation/notification.svg`}
              alt=''
              className='img'
            />
          </button>
        </li>
        <li className='my-auto'>
          <button type='button' className='p-16'>
            <img
              src={`${url}/img/navigation/user.svg`}
              alt=''
              className='img'
            />
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Navigation;
