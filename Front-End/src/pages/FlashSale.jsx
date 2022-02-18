import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FlashSaleData } from '../components/core/core';
import Hero from '../components/Hero';
import Pagination from '../components/Pagination';
import SingleItem from '../components/SingleItem';
import TimeLaps from '../components/TimeLaps';

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
      <Breadcrumb />
      <Hero />
      <section className='container bg-white flex pt-16 flex-col'>
        <div className='pb-16 flex justify-center flex-row items-center'>
          <h3 className='mr-16'>Time Left </h3>
          <TimeLaps />
        </div>
        <div className='flex flex-row'>
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
      <Pagination />
    </>
  );
}

export default FlashSale;
