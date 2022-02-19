import React, { useEffect, useState } from 'react';
import Slider from 'react-slick/lib/slider';
import { category, topSellingData } from './core/core';
import SectionTitle from './partials/SectionTitle';
import SingleItem from './SingleItem';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute top-[10px] p-8 cursor-pointer -right-[5px]'>
      <i onClick={onClick} className='fa-solid fa-chevron-right'></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className='absolute top-[10px] p-8 cursor-pointer -left-[5px]'>
      <i onClick={onClick} className='fa-solid fa-chevron-left'></i>
    </div>
  );
}

function Suggetions() {
  const [collections, setCollections] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setData(topSellingData);
    setCount(topSellingData.length - 1);
    setCollections(category);
    return () => {
      setData([]);
      setCount(0);
      setCollections();
    };
  }, []);
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    variableWidth: true,
    swipeToSlide: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className='container bg-white'>
      <SectionTitle title='Product Suggestions' />
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
      <div className='w-full flex flex-row mt-16'>
        {data.map((item, index) => (
          <SingleItem
            key={index}
            content={item}
            classes={index === 0 ? 'mr-8' : index === count ? 'ml-8' : 'mx-8'}
            size='180px'
          />
        ))}
      </div>
    </section>
  );
}

export default Suggetions;
