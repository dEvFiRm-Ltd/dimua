import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
import { topSellingData } from './core/core';
import SectionTitle from './partials/SectionTitle';
import SingleItem from './SingleItem';

function TopSelling() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setData(topSellingData);
    setCount(topSellingData.length - 1);

    return () => {
      setData([]);
      setCount(0);
    };
  }, []);

  return (
    <section className='container bg-topSelling inline-block'>
      <SectionTitle title='Top selling products' slug='top-products' />
      <div className='flex flex-row'>
        {data.map((item, index) => (
          <SingleItem
            key={index}
            content={item}
            classes={index === 0 ? 'mr-8' : index === count ? 'ml-8' : 'mx-8'}
            size='180px'
            showDiscount={true}
          />
        ))}
      </div>
    </section>
  );
}

export default TopSelling;
