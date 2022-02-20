import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FilterBar from '../components/FilterBar';

function Products() {
  return (
    <>
      <Breadcrumb />
      <section className=' container flex flex-row '>
        <div className='flex-wrap w-[31%] pr-6 '>
          <FilterBar />
        </div>
        <div className='flex-wrap w-[69%] pr-6 '>{/* <FilterBar /> */}</div>
      </section>
    </>
  );
}

export default Products;
