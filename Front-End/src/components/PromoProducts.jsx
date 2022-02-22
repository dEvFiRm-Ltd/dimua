// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
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
      <div className='flex justify-center pt-16 flex-wrap '>
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-1/4 py-8 ${
              index % 4 === 0 || index === 0
                ? 'pr-8'
                : index === count || index % 3 === 0
                ? 'pl-8'
                : 'px-8'
            }`}
          >
            <SingleItem
              key={index}
              content={item}
              size='229px'
              showDiscount={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PromoProducts;
