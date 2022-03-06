import { useEffect, useState } from 'react';
import { topSellingData } from './core/core';
import SectionTitle from './partials/SectionTitle';
import SingleItem from './SingleItem';

function TopSelling() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(topSellingData);

    return () => {
      setData([]);
    };
  }, []);

  return (
    <section
      className='container'
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/top-selling.jpg)`,
      }}
    >
      <SectionTitle title='Top selling products' slug='top-products' />
      <div className='flex flex-row flex-wrap'>
        {data.map((item, index) => (
          <div
            key={index}
            className={`w-1/5 p-8 first:pl-0 fifth:pr-0 sixth:pl-0 `}
          >
            <SingleItem
              key={index}
              content={item}
              size='h-318'
              showDiscount={true}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TopSelling;
