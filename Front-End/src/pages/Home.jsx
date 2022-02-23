import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/UserPanel/Category';
import url from '../components/UserPanel/core/core';
import Coupons from '../components/UserPanel/coupones/Coupons';
import FeaturedBrand from '../components/UserPanel/FeaturedBrand';
import FlashSale from '../components/UserPanel/FlashSale';
import Hero from '../components/UserPanel/Hero';
import HotComponent from '../components/UserPanel/HotComponent';
import PromoProducts from '../components/UserPanel/PromoProducts';
import Suggetions from '../components/UserPanel/Suggetions';
import TopSelling from '../components/UserPanel/TopSelling';

function Home() {
  return (
    <>
      <Hero />
      <HotComponent />
      <Category />
      <FlashSale />
      <Coupons />
      <TopSelling />
      <Link to={'/'} className=' container my-8 p-0 '>
        <img
          src={`${url}/img/advertise.jpg`}
          alt=''
          className='w-full object-contain'
        />
      </Link>
      <FeaturedBrand />
      <PromoProducts />
      <Suggetions />
    </>
  );
}

export default Home;
