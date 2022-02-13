import React from 'react';
import Category from '../components/Category';
import FlashSale from '../components/FlashSale';
import Hero from '../components/Hero';
import HotComponent from '../components/HotComponent';

function Home() {
  return (
    <>
      <Hero />
      <HotComponent />
      <Category />
      <FlashSale />
    </>
  );
}

export default Home;
