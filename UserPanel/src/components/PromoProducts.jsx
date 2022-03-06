import { useEffect, useState } from 'react';
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
            className={`p-8 lg:w-1/4 xl:w-1/5 first:pl-0 lg:fourth:pr-0 lg:fifth:pl-0 xl:fourth:pr-8 xl:fifth:pl-8 xl:fifth:pr-0 xl:sixth:pl-0`}
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
