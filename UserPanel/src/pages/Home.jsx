import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category';
import url from '../components/core/core';
import Coupons from '../components/coupones/Coupons';
import FeaturedBrand from '../components/FeaturedBrand';
import FlashSale from '../components/FlashSale';
import Hero from '../components/Hero';
import HotComponent from '../components/HotComponent';
import PromoProducts from '../components/PromoProducts';
import Suggetions from '../components/Suggetions';
import TopSelling from '../components/TopSelling';

function Home() {
  return (
    <>
      <Hero />
      <HotComponent />
      <Category />
      <FlashSale />
      <Coupons />
      <TopSelling />
      {/* <Link to={'/'} className=' container my-8 p-0 '>
        <img
          src={`${url}/img/advertise.jpg`}
          alt=''
          className='w-full object-contain'
        />
      </Link> */}
      <FeaturedBrand />
      <PromoProducts />
      <Suggetions />
    </>
  );
}

export default Home;