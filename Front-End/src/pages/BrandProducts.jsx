// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import { topSellingData } from '../components/core/core';
import SingleItem from '../components/SingleItem';

function BrandProducts() {
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
      <div className='container pb-0 my-10 flex flex-row flex-wrap justify-start '>
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
    </>
  );
}

export default BrandProducts;
