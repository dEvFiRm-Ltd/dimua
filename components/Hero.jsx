import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

function Hero() {
  const settings = {
    dots: false,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className=' lg:container xl:max-w-full p-0 h-[300px] my-0'>
      <Slider {...settings}>
        <div className='h-[300px] bg-white block'>
          <Image
            layout='fill'
            src={`/img/H-Banner-Main.jpg`}
            alt=''
            className='img w-full h-full object-cover'
          />
        </div>
        <div className='h-[300px] bg-white block'>
          <Image
            layout='fill'
            src={`/img/H-Banner-Main02.jpg`}
            alt=''
            className='img w-full h-full object-cover'
          />
        </div>
        <div className='h-[300px] bg-white block'>
          <Image
            layout='fill'
            src={`/img/H-Banner-Main03.jpg`}
            alt=''
            className='img w-full h-full object-cover'
          />
        </div>
      </Slider>
    </section>
  );
}

export default Hero;
