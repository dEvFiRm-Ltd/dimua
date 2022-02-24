// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import SectionTitle from './partials/SectionTitle';
import { FlashSaleData } from './core/core';
import SingleItem from './SingleItem';

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
    <section className='container px-8 bg-cyan inline-block'>
      <div className='px-8'>
        <SectionTitle
          title='flash-sale'
          duration='20-24-30'
          slug='flash-sale'
          background={true}
        />
      </div>
      <div className='flex justify-center flex-wrap px-8'>
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

export default FlashSale;
