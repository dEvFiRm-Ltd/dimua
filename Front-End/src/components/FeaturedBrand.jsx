import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import url, { FeaturedBrandData } from './core/core';
import SectionTitle from './partials/SectionTitle';

function FeaturedBrand() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData(FeaturedBrandData);
    setCount(FeaturedBrandData.length - 1);
    return () => {
      setCount(0);
      setData([]);
    };
  }, []);

  return (
    <section className='container bg-white '>
      <SectionTitle title='Featured brand' slug='featured-brand' />
      <div className='flex flex-row justify-center w-full px-12 py-16 '>
        {data.map((item, index) => (
          <Link
            to={''}
            key={index}
            className={` ${
              index === count ? '' : 'mr-[43px]'
            } w-[65px] h-[65px] `}
          >
            <img
              src={`${url}/img/brand.png`}
              alt=''
              className='h-full w-full '
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FeaturedBrand;
