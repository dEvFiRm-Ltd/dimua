import { useEffect, useState } from 'react';
import { topSellingData } from '../components/core/core';
import SingleItem from '../components/SingleItem';

function BrandProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(topSellingData);
    return () => {
      setData([]);
    };
  }, []);
  return (
    <>
      <div className='container pb-0 my-10 flex flex-row flex-wrap justify-start '>
        <button className='py-[2px] px-4 mr-8 text-[16px] leading-5 font-normal text-green '>
          Selling <i className='fa-solid fa-bolt'></i>
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
          <div className={`w-1/5 p-8 first:pl-0 fifth:pr-0 sixth:pl-0 `}>
            <SingleItem key={index} content={item} size='h-180' />
          </div>
        ))}
      </div>
    </>
  );
}

export default BrandProducts;
