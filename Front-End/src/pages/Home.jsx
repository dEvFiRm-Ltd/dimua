import React from 'react';
import Category from '../components/Category';
import Coupons from '../components/coupones/Coupons';
import FlashSale from '../components/FlashSale';
import Hero from '../components/Hero';
import HotComponent from '../components/HotComponent';
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
    </>
  );
}

export default Home;
