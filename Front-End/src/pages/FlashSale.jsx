import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
import { FlashSaleData } from '../components/core/core';
import Hero from '../components/Hero';
import SingleItem from '../components/SingleItem';

function FlashSale() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setData(FlashSaleData);
    setCount(FlashSaleData.length - 1);
    return () => {
      setCount(0);
      setData([]);
    };
  }, []);
  return (
    <>
      <Hero />
      <section className='container bg-white'>
        <div className='flex justify-center'>
          {data.map((item, index) => (
            <SingleItem
              key={index}
              content={item}
              classes={index === 0 ? 'mr-8' : index === count ? 'ml-8' : 'mx-8'}
              size='229px'
              showDiscount={true}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default FlashSale;
