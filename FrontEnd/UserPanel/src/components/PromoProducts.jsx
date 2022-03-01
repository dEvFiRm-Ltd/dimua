// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import { FlashSaleData } from './core/core';
import SectionTitle from './partials/SectionTitle';
import SingleItem from './SingleItem';

function PromoProducts() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(FlashSaleData);
    return () => {
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
            className={`w-1/4 p-8 first:pl-0 fourth:pr-0 fifth:pl-0`}
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
