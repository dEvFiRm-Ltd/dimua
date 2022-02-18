import React, { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { couponData, FlashSaleData } from '../components/core/core';
import SingleCoupon from '../components/coupones/SingleCoupon';
import Hero from '../components/Hero';
import Pagination from '../components/Pagination';
import SingleItem from '../components/SingleItem';
import TimeLaps from '../components/TimeLaps';

function FlashSale() {
  const [product, setProduct] = useState([]);
  const [productCount, setProductCount] = useState(0);
  const [coupon, setCoupon] = useState([]);
  const [couponCount, setCouponCount] = useState(0);

  useEffect(() => {
    setCoupon(couponData);
    setCouponCount(couponData.length - 1);
    setProduct(FlashSaleData);
    setProductCount(FlashSaleData.length - 1);
    return () => {
      setCoupon([]);
      setProductCount(0);
      setCouponCount(0);
      setProduct([]);
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
        <div className='flex flex-row'>
          {/* {product.map((item, index) => (
            <SingleItem
              key={index}
              content={item}
              classes={index === 0 ? 'mr-8' : index === productCount ? 'ml-8' : 'mx-8'}
              size='229px'
              showDiscount={true}
            />
          ))} */}
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
    </>
  );
}

export default FlashSale;
