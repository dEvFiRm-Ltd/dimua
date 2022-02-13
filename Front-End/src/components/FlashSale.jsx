import React from 'react';
import FlashItem from './FlashItem';
import SectionTitle from './partials/SectionTitle';

function FlashSale() {
  return (
    <section className='bg-cyan container pb-16 inline-block'>
      <SectionTitle title='Flash Sale' duration='20-24-30' slug='flash-sales' />
      <div className='flex justify-center'>
        <FlashItem />
      </div>
    </section>
  );
}

export default FlashSale;
