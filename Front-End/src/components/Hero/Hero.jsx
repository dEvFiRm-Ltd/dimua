import React from 'react';
import Slider from 'react-slick';
import url from '../core/core';

function Hero() {
  const settings = {
    dots: false,
    nav: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className=' container p-0 h-[300px]'>
      <Slider {...settings}>
        <img
          src={`${url}/img/H-Banner-Main.jpg`}
          alt=''
          className='img w-full h-full'
        />
        <img
          src={`${url}/img/H-Banner-Main.jpg`}
          alt=''
          className='img w-full h-full'
        />
        <img
          src={`${url}/img/H-Banner-Main.jpg`}
          alt=''
          className='img w-full h-full'
        />
      </Slider>
    </section>
  );
}

export default Hero;
