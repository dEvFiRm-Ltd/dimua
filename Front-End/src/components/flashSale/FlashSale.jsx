import React, { useEffect, useState } from 'react';
import FlashItem from './FlashItem';
import SectionTitle from '../partials/SectionTitle';
import { FlashSaleData } from '../core/core';

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
    <section className='bg-cyan container pb-16 inline-block'>
      <SectionTitle title='Flash Sale' duration='20-24-30' slug='flash-sales' />
      <div className='flex justify-center'>
        {data.map((item, index) => (
          <FlashItem
            key={index}
            content={item}
            classes={index === 0 ? 'mr-8' : index === count ? 'ml-8' : 'mx-8'}
          />
        ))}
      </div>
    </section>
  );
}

export default FlashSale;
