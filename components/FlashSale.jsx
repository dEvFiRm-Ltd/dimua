import { useEffect, useState } from 'react';
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
            className={`p-8 lg:w-1/4 xl:w-1/5 first:pl-0 lg:fourth:pr-0 lg:fifth:pl-0 xl:fourth:pr-8 xl:fifth:pl-8 xl:fifth:pr-0 xl:sixth:pl-0  `}
          >
            <SingleItem
              key={index}
              content={item}
              size='h-229'
              showDiscount={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlashSale;
