// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import Breadcrumb from '../components/UserPanel/Breadcrumb';
import { FlashSaleData } from '../components/UserPanel/core/core';
import Hero from '../components/UserPanel/Hero';
import Pagination from '../components/UserPanel/Pagination';
import SingleItem from '../components/UserPanel/SingleItem';
import TimeLaps from '../components/UserPanel/TimeLaps';

function FlashSale() {
  const [product, setProduct] = useState([]);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    setProduct(FlashSaleData);
    setProductCount(FlashSaleData.length - 1);
    return () => {
      setProductCount(0);
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
              classes={
                index === 0 ? 'mr-8' : index === productCount ? 'ml-8' : 'mx-8'
              }
              size='229px'
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
