import Slider from 'react-slick/lib/slider';
// import { useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react/cjs/react.development';
import Breadcrumb from '../components/Breadcrumb';
import { category } from '../components/core/core';
import Hero from '../components/Hero';

function Brands() {
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
      <section className='container'>
        <div className='relative'>
          <Slider {...settings} className=' px-16'>
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
          <div className='absolute bottom-0 left-0 right-0 w-full h-[2px] bg-black/50 opacity-50'></div>
        </div>
      </section>
    </>
  );
}

export default Brands;
