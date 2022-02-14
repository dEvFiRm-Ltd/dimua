import React, { useEffect, useState } from 'react';
import { FlashSaleData } from './core/core';
import SectionTitle from './partials/SectionTitle';
import SingleItem from './SingleItem';

function PromoProducts() {
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
    <section className='container bg-white'>
      <SectionTitle title='Promotional Products' slug='promo-products' />
      <div className='flex justify-center pt-16'>
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

export default PromoProducts;
