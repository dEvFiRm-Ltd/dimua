import { Link } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';
// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import Breadcrumb from '../components/Breadcrumb';
import url, { category } from '../components/core/core';
import Hero from '../components/Hero';

function AllBrands() {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    setCollections(category);
    return () => {
      setCollections();
    };
  }, []);
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <>
      <Breadcrumb />
      <Hero />
      <section className='bg-white'>
        <div className='relative'>
          <Slider {...settings}>
            <button
              value=''
              className='p-16 border-none bg-transparent text-2xl leading-[24px] font-bold capitalize relative'
              type='button'
              defaultChecked
            >
              All
              <div className='absolute bottom-0 right-0 left-0 w-full h-[2px] bg-green'></div>
            </button>
            {collections.map((item, index) => (
              <button
                value={item.slug}
                key={index}
                className='p-16 border-none bg-transparent text-2xl leading-[24px] capitalize'
                type='button'
              >
                {item.title}
              </button>
            ))}
          </Slider>
        </div>
        <div className='container py-8 bg-white my-0 flex flex-row '>
          <button className='relative text-green text-md py-[2px] px-4 '>
            Top Brands <i className='fa-solid fa-crown'></i>
          </button>
          <button className='relative text-black text-md py-[2px] px-4 '>
            New Brands
          </button>
        </div>
      </section>
      <section className='container flex flex-row flex-wrap px-8 '>
        {/* Card */}
        <div className='w-1/3 px-8'>
          <Link
            to='/brand'
            className='rounded-lg my-16 w-full px-[24px] py-12 flex flex-row bg-white items-center justify-between'
          >
            <div className='flex flex-row'>
              <div className='mr-[24px] w-[50px] h-[50px] '>
                <img
                  src={`${url}/img/McDonalds-Icon.png`}
                  alt=''
                  className=' w-full h-full '
                />
              </div>
              <div className='flex flex-col mr-[24px]'>
                <h3 className='mb-4 leading-[150%] font-medium'>McDonalds</h3>
                <h5 className='leading-[150%] font-normal'>30 Products</h5>
              </div>
            </div>
            <i className='fa-solid fa-angle-right'></i>
          </Link>
        </div>
        <div className='w-1/3 px-8'>
          <Link
            to='/brand'
            className='rounded-lg my-16 w-full px-[24px] py-12 flex flex-row bg-white items-center justify-between'
          >
            <div className='flex flex-row'>
              <div className='mr-[24px] w-[50px] h-[50px] '>
                <img
                  src={`${url}/img/McDonalds-Icon.png`}
                  alt=''
                  className=' w-full h-full '
                />
              </div>
              <div className='flex flex-col mr-[24px]'>
                <h3 className='mb-4 leading-[150%] font-medium'>McDonalds</h3>
                <h5 className='leading-[150%] font-normal'>30 Products</h5>
              </div>
            </div>
            <i className='fa-solid fa-angle-right'></i>
          </Link>
        </div>
        <div className='w-1/3 px-8'>
          <Link
            to='/brand'
            className='rounded-lg my-16 w-full px-[24px] py-12 flex flex-row bg-white items-center justify-between'
          >
            <div className='flex flex-row'>
              <div className='mr-[24px] w-[50px] h-[50px] '>
                <img
                  src={`${url}/img/McDonalds-Icon.png`}
                  alt=''
                  className=' w-full h-full '
                />
              </div>
              <div className='flex flex-col mr-[24px]'>
                <h3 className='mb-4 leading-[150%] font-medium'>McDonalds</h3>
                <h5 className='leading-[150%] font-normal'>30 Products</h5>
              </div>
            </div>
            <i className='fa-solid fa-angle-right'></i>
          </Link>
        </div>
        <div className='w-1/3 px-8'>
          <Link
            to='/brand'
            className='rounded-lg my-16 w-full px-[24px] py-12 flex flex-row bg-white items-center justify-between'
          >
            <div className='flex flex-row'>
              <div className='mr-[24px] w-[50px] h-[50px] '>
                <img
                  src={`${url}/img/McDonalds-Icon.png`}
                  alt=''
                  className=' w-full h-full '
                />
              </div>
              <div className='flex flex-col mr-[24px]'>
                <h3 className='mb-4 leading-[150%] font-medium'>McDonalds</h3>
                <h5 className='leading-[150%] font-normal'>30 Products</h5>
              </div>
            </div>
            <i className='fa-solid fa-angle-right'></i>
          </Link>
        </div>
      </section>
    </>
  );
}

export default AllBrands;
