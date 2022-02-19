// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import { couponData } from '../core/core';
import SectionTitle from '../partials/SectionTitle';
import SingleCoupon from './SingleCoupon';

function Coupons() {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setData(couponData);
    setCount(couponData.length - 1);
  }, []);

  return (
    <section className='container bg-white'>
      <SectionTitle title='Coupon Codes' slug='coupons' />
      <div className='flex flex-row justify-center '>
        {data.map((item, index) => (
          <SingleCoupon
            key={index}
            content={item}
            classes={index === 0 ? 'mr-8' : index === count ? 'ml-8' : 'mx-8'}
          />
        ))}
      </div>
    </section>
  );
}

export default Coupons;
