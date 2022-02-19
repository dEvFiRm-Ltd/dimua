// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import Breadcrumb from '../components/Breadcrumb';
import url, { topSellingData } from '../components/core/core';
import Hero from '../components/Hero';
import SingleItem from '../components/SingleItem';
import Stars from '../components/Stars';

function SingleBrand() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData(topSellingData);
    setCount(topSellingData.length - 1);
    return () => {
      setData([]);
      setCount(0);
    };
  }, []);
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
          <button
            type='button'
            className='w-full pt-12 pb-[29px] text-center text-lg font-normal relative '
          >
            Product
          </button>
        </div>
        <div className='w-1/3 px-8'>
          <button
            type='button'
            className='w-full pt-12 pb-[29px] text-center text-lg font-normal relative '
          >
            Company Information
          </button>
        </div>
        <div className='w-1/3 px-8'>
          <button
            type='button'
            className='w-full pt-12 pb-[29px] text-center text-lg font-normal relative '
          >
            Evaluate
          </button>
        </div>
      </section>
      {/*  <div className='container pb-0 my-10 flex flex-row flex-wrap justify-start '>
          <button className='py-[2px] px-4 mr-8 text-[16px] leading-5 font-normal text-green '>
            Selling <i class='fa-solid fa-bolt'></i>
          </button>
          <button className='py-[2px] px-4 mr-8 text-[16px] leading-5 font-normal text-black '>
            New Products
          </button>
          <button className='py-[2px] px-4 mr-8 text-[16px] leading-5 font-normal text-black '>
            Hot Products
          </button>
          <button className='py-[2px] px-4 mr-8 text-[16px] leading-5 font-normal text-green '>
            Price
          </button>
        </div>
        
        <div className='container flex flex-wrap flex-row mt-16'>
          {data.map((item, index) => (
            <div
              className={`w-1/5 py-8 ${
                index % 5 === 0 || index === 0
                  ? 'pr-8'
                  : index === count || index % 4 === 0
                  ? 'pl-8'
                  : 'px-8'
              }`}
            >
              <SingleItem key={index} content={item} size='180px' />
            </div>
          ))}
        </div>
         */}
      {/* <div className='container flex flex-wrap flex-row mt-16'>
        <div className='w-1/2 pr-8'>
          <div className='bg-white rounded-lg px-16 py-13 flex flex-col '>
            <div className='flex flex-row justify-start'>
              <img
                src={`${url}/img/location.svg`}
                alt=''
                className=' mr-[8.60px]'
              />
              <h3 className='font-normal'> Company Name </h3>
            </div>
            <div className='mt-12 ml-[26px] flex flex-col '>
              <h5>Lô 202 - Khu công nghiệp Bắc Ninh</h5>
              <h5 className='font-normal'>97-99 Láng Hạ, Đống Đa, Hà Nội</h5>
            </div>
          </div>
        </div>
        <div className='w-1/2 pl-8'>
          <div className='bg-white rounded-lg py-[29px] flex flex-col '>
            <div className='flex flex-row justify-around'>
              <div className='text-center'>
                <h2 className='text-green mb-4'>90%</h2>
                <p className=''>On-time application rate</p>
              </div>
              <div className='text-center'>
                <h2 className='text-green mb-4'>15K</h2>
                <p className=''>Number of orders sold</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className='my-16 py-16 bg-white flex flex-row justify-around'>
        <div className='flex flex-col'>
          <h3 className='font-normal mb-16'>Product Reviews</h3>
          <div className='flex flex-row'>
            <div className='flex flex-row mr-16'>
              <h2 className='text-[30px] font-semibold text-[#767676] '>5/</h2>
              <h2 className='text-[24px] font-semibold text-[#767676] '>5</h2>
            </div>
            <div className='flex flex-row text-yellow '>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star'></i>
              <i class='fa-solid fa-star-half'></i>
            </div>
          </div>
          <h3 className='leading-[230%] font-normal '>(20 Reviews)</h3>
        </div>
        <div className='flex flex-col'>
          <Stars count={5} />
          <Stars count={4} />
          <Stars count={3} />
          <Stars count={2} />
          <Stars count={1} />
        </div>
      </div>
    </>
  );
}

export default SingleBrand;
