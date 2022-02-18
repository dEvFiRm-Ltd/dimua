import React from 'react';
import SectionTitle from './partials/SectionTitle';
import { FlashSaleData } from './core/core';
import SingleItem from './SingleItem';
import { useEffect, useState } from 'react/cjs/react.production.min';

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
    <section className='container bg-cyan inline-block'>
      <SectionTitle
        title='flash-sale'
        duration='20-24-30'
        slug='flash-sales'
        background={true}
      />
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
  );
}

export default FlashSale;
