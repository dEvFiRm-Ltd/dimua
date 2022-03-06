import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { FlashSaleData } from '../components/core/core';
import Hero from '../components/Hero';
import Pagination from '../components/Pagination';
import SingleItem from '../components/SingleItem';
import TimeLaps from '../components/TimeLaps';

function FlashSale() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(FlashSaleData);
    return () => {
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
        <div className='flex flex-row flex-wrap '>
          {product.map((item, index) => (
            <SingleItem
              key={index}
              content={item}
              classes={'mx-8 first:mr-0'}
              size='h-229'
              showDiscount={true}
            />
          ))}
        </div>
      </section>
      <Pagination />
    </>
  );
}

export default FlashSale;
