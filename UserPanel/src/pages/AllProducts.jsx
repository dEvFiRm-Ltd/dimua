// import { useEffect, useState } from 'react/cjs/react.production.min';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import { topSellingData } from '../components/core/core';
import FilterBar from '../components/FilterBar';
import Pagination from '../components/Pagination';
import SingleItem from '../components/SingleItem';

function AllProducts() {
  const slug = useParams().id;
  const [category, setCategory] = useState({});
  const [product, setProduct] = useState([]);

  const fetchCategory = async () => {
    const cat = await fetch(
      `https://devfirm-ecommerce.herokuapp.com/category/${slug}`
    );
    const single = await cat.json();
    setCategory(single.category);
  };

  useEffect(() => {
    fetchCategory();
    setProduct(topSellingData);
    return () => {
      setProduct([]);
      setCategory({});
    };
    // eslint-disable-next-line
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
              <h5 className='font-semibold leading-120 capitalize '>
                {category.title}
              </h5>
            </div>
            <div className='py-12 px-16 flex justify-start items-center '>
              <button className='py-8 px-13 text-md capitalize font-semibold'>
                {' '}
                Selling <i className='fa-solid fa-bolt'></i>
              </button>
              <button className='py-8 px-13 text-md capitalize font-semibold'>
                {' '}
                New Products
              </button>
              <button className='py-8 px-13 text-md capitalize font-semibold'>
                {' '}
                Price{' '}
                <i className=' rotate-90 fa-solid fa-arrow-right-arrow-left'></i>
              </button>
            </div>
            <div className='flex flex-row py-8 px-16 flex-wrap '>
              {product.map((item, index) => (
                <div key={index} className={`w-1/4 py-8 px-8`}>
                  <SingleItem content={item} size='180px' showDiscount={true} />
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

export default AllProducts;
