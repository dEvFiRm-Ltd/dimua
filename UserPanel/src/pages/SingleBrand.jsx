import { Link, Outlet } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb';
import url from '../components/core/core';
import Hero from '../components/Hero';

function SingleBrand() {
  return (
    <>
      <Breadcrumb />
      <section className='bg-white flex flex-col justify-center'>
        <img
          src={`${url}/img/McDonalds-Icon.png`}
          alt=''
          className='h-[50px] my-10'
        />
        <Hero />
      </section>
      <section className='flex flex-row flex-wrap my-16 bg-white'>
        <div className='w-1/3 px-8'>
          <Link
            to='products'
            type='button'
            className='w-full pt-12 pb-[29px] text-center text-lg font-normal relative block'
          >
            Product
          </Link>
        </div>
        <div className='w-1/3 px-8'>
          <Link
            to='information'
            type='button'
            className='w-full pt-12 pb-[29px] text-center text-lg font-normal relative block'
          >
            Company Information
          </Link>
        </div>
        <div className='w-1/3 px-8'>
          <Link
            to='reviews'
            type='button'
            className='w-full pt-12 pb-[29px] text-center text-lg font-normal relative block'
          >
            Evaluate
          </Link>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default SingleBrand;
