import React from 'react';
import { useEffect, useState } from 'react/cjs/react.production.min';
import { category, topSellingData } from './core/core';
import SectionTitle from './partials/SectionTitle';
import SingleItem from './SingleItem';

function Suggetions() {
  const [collections, setCollections] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData(topSellingData);
    setCount(topSellingData.length - 1);
    setCollections(category);
    return () => {
      setData([]);
      setCount(0);
      setCollections();
    };
  }, []);
  return (
    <section className='container bg-white'>
      <SectionTitle title='Product Suggestions' />
      <div className='flex flex-col'>
        <select className='w-1/4 py-10 px-16 capitalize'>
          <option
            value=''
            className='p-16 border-none bg-transparent text-2xl leading-[24px] capitalize'
            type='button'
            defaultChecked
          >
            All
          </option>
          {collections.map((item, index) => (
            <option
              value={item.slug}
              key={index}
              className='p-16 border-none bg-transparent text-2xl leading-[24px] capitalize'
              type='button'
            >
              {item.title}
            </option>
          ))}
        </select>
        <div className='w-full flex flex-row mt-16'>
          {data.map((item, index) => (
            <SingleItem
              key={index}
              content={item}
              classes={index === 0 ? 'mr-8' : index === count ? 'ml-8' : 'mx-8'}
              size='180px'
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Suggetions;
