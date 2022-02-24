// import { useEffect, useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import Breadcrumb from '../components/Breadcrumb';
import { topSellingData } from '../components/core/core';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import SingleItem from '../components/SingleItem';

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(topSellingData);
    return () => {
      setProduct([]);
    };
  }, []);
  return (
    <>
      <Breadcrumb />
      <section className=' container flex flex-row '>
        <div className='flex-wrap w-[31%] pr-6 '>
          <FilterBar />
        </div>
        <div className='flex-wrap w-[69%] pr-6 '>
          <div className='flex flex-col bg-white'>
            <div className='py-12 px-16 flex justify-start items-center '>
              <h5 className='font-semibold leading-120 '>
                Fashion Accessories
              </h5>
            </div>
            <div className='py-12 px-16 flex justify-start items-center '>
              <button className='py-8 px-13 text-md capitalize font-semibold'>
                {' '}
                Selling <i class='fa-solid fa-bolt'></i>
              </button>
              <button className='py-8 px-13 text-md capitalize font-semibold'>
                {' '}
                New Products
              </button>
              <button className='py-8 px-13 text-md capitalize font-semibold'>
                {' '}
                Price{' '}
                <i class=' rotate-90 fa-solid fa-arrow-right-arrow-left'></i>
              </button>
            </div>
            <div className='flex flex-row py-8 px-16 flex-wrap '>
              {product.map((item, index) => (
                <div className={`w-1/4 py-8 px-8`}>
                  <SingleItem
                    key={index}
                    content={item}
                    size='180px'
                    showDiscount={true}
                  />
                </div>
              ))}
            </div>
          </div>
          <Pagination />
        </div>
      </section>
    </>
  );
}

export default Products;
