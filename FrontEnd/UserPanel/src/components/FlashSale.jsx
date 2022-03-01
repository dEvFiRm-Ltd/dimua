// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import SectionTitle from './partials/SectionTitle';
import { FlashSaleData } from './core/core';
import SingleItem from './SingleItem';

function FlashSale() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(FlashSaleData);
    return () => {
      setData([]);
    };
  }, []);

  return (
    <section className='container px-8 bg-cyan'>
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
            className={`w-1/4 p-8 first:pl-0 fourth:pr-0 fifth:pl-0  `}
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
