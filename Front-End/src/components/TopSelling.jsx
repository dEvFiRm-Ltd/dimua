import React, { useEffect, useState } from 'react';
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
    <section className='container bg-topSelling pb-16 inline-block'>
      <SectionTitle title='Top selling products' slug='top-products' />
      <div className='flex flex-row'>
        {data.map((item, index) => (
          <SingleItem
            key={index}
            content={item}
            classes={` w-[180px] ${
              index === 0 ? 'mr-8' : index === count ? 'ml-8' : 'mx-8'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default TopSelling;
