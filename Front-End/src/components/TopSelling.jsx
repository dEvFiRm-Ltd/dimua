// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
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
    <section className='container bg-topSelling'>
      <SectionTitle title='Top selling products' slug='top-products' />
      <div className='flex flex-row flex-wrap'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-1/5 py-8 ${
              index % 5 === 0 || index === 0
                ? 'pr-8'
                : index === count || index % 4 === 0
                ? 'pl-8'
                : 'px-8'
            }`}
          >
            <SingleItem
              key={index}
              content={item}
              size='180px'
              showDiscount={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopSelling;
