import { useState } from 'react';
import Image from 'next/image';
import Breadcrumb from '../../components/Breadcrumb';
import Hero from '../../components/Hero';
import BrandProducts from '../../components/BrandProducts';
import BrandReviews from '../../components/BrandReviews';
import BrandInfo from '../../components/BrandInfo';

function SingleBrand() {
  const [collapse, setCollapse] = useState(2);

  const handleCollapse = (e) => {
    setCollapse(e);
  };
  return (
    <>
      <Breadcrumb />
      <section className='bg-white flex flex-col justify-center'>
        <span className='h-[50px] my-10 relative'>
          <Image src={`/img/McDonalds-Icon.png`} alt='' layout='fill' />
        </span>
        <Hero />
      </section>
      <section className='flex flex-row flex-wrap my-16 bg-white'>
        <div className='w-1/3 px-8'>
          <button
            onClick={() => handleCollapse(1)}
            to='products'
            type='button'
            className={`w-full pt-12 pb-[29px] text-center transition-all ${
              collapse === 1 && 'text-green'
            }  text-lg font-normal relative block`}
          >
            Product
            <span
              className={`absolute left-1/2 bottom-14 bg-green transition-all h-[2px] w-30 -translate-x-1/2 ${
                collapse !== 1 && 'scale-0'
              } `}
            ></span>
          </button>
        </div>
        <div className='w-1/3 px-8'>
          <button
            onClick={() => handleCollapse(2)}
            to='information'
            type='button'
            className={`w-full pt-12 pb-[29px] text-center transition-all ${
              collapse === 2 && 'text-green'
            } text-lg font-normal relative block`}
          >
            Company Information
            <span
              className={`absolute left-1/2 bottom-14 bg-green transition-all h-[2px] w-30 -translate-x-1/2 ${
                collapse !== 2 && 'scale-0'
              } `}
            ></span>
          </button>
        </div>
        <div className='w-1/3 px-8'>
          <button
            onClick={() => handleCollapse(3)}
            to='reviews'
            type='button'
            className={`w-full pt-12 pb-[29px] text-center transition-all ${
              collapse === 3 && 'text-green'
            } text-lg font-normal relative block`}
          >
            Evaluate
            <span
              className={`absolute left-1/2 bottom-14 bg-green transition-all h-[2px] w-30 -translate-x-1/2 ${
                collapse !== 3 && 'scale-0'
              } `}
            ></span>
          </button>
        </div>
      </section>

      {/* Collapse Area */}
      {collapse === 1 ? (
        <BrandProducts />
      ) : collapse === 2 ? (
        <BrandInfo />
      ) : (
        <BrandReviews />
      )}
      {/* Area 01 */}
    </>
  );
}

export default SingleBrand;
