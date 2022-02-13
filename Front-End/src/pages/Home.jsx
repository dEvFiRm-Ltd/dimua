import React from 'react';
import Category from '../components/Category/Category';
import Hero from '../components/Hero/Hero';
import HotComponent from '../components/hotComponent/HotComponent';

function Home() {
  return (
    <>
      <Hero />
      <HotComponent />
      <Category />
    </>
  );
}

export default Home;
