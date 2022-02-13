import React from 'react';
import SectionTitle from '../partials/SectionTitle';
import SingleCoupon from './SingleCoupon';

function Coupons() {
  return (
    <section className='container bg-white pb-16'>
      <SectionTitle title='Coupon Codes' background='white' slug='coupon' />
      <div className='flex flex-row justify-center '>
        <SingleCoupon />
      </div>
    </section>
  );
}

export default Coupons;
