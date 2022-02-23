// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import Breadcrumb from '../components/UserPanel/Breadcrumb';
import { couponData } from '../components/UserPanel/core/core';
import SingleCoupon from '../components/UserPanel/coupones/SingleCoupon';
import Hero from '../components/UserPanel/Hero';
import Pagination from '../components/UserPanel/Pagination';
import Modal from '../components/UserPanel/partials/Modal';
// eslint-disable-next-line
import SingleItem from '../components/UserPanel/SingleItem';
import TimeLaps from '../components/UserPanel/TimeLaps';

function Coupon() {
  const [coupon, setCoupon] = useState([]);
  const [couponCount, setCouponCount] = useState(0);

  useEffect(() => {
    setCoupon(couponData);
    setCouponCount(couponData.length - 1);
    return () => {
      setCoupon([]);
      setCouponCount(0);
    };
  }, []);
  return (
    <>
      <Breadcrumb />
      <Hero />
      <section className='container bg-white flex pt-16 flex-col'>
        <div className='pb-16 flex justify-center flex-row items-center'>
          <h3 className='mr-16'>Time Left </h3>
          <TimeLaps />
        </div>
        <div className='flex flex-row flex-wrap'>
          {coupon.map((item, index) => (
            <SingleCoupon
              key={index}
              content={item}
              classes={
                index === 0 ? 'mr-8' : index === couponCount ? 'ml-8' : 'mx-8'
              }
            />
          ))}
        </div>
      </section>
      <Pagination />
      <Modal />
    </>
  );
}

export default Coupon;
