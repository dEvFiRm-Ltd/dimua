import React, { useEffect, useState } from 'react';
import { couponData } from '../core/core';
import SectionTitle from '../partials/SectionTitle';
import SingleCoupon from './SingleCoupon';

function Coupons() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(couponData);
  }, []);

  return (
    <section className='container bg-white pb-16'>
      <SectionTitle title='Coupon Codes' background='white' slug='coupon' />
      <div className='flex flex-row justify-center '>
        {data.map((item, index) => (
          <SingleCoupon
            key={index}
            content={item}
            classes={
              index === 0 ? 'mr-8' : index === data.length - 1 ? 'ml-8' : 'mx-8'
            }
          />
        ))}
      </div>
    </section>
  );
}

export default Coupons;
