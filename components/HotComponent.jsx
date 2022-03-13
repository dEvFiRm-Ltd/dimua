import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function HotComponent() {
  return (
    <section className='container flex flex-row my-0 py-8 px-0'>
      <Link
        passHref
        href='/'
        className='w-1/3 bg-gray h-[130px] mr-8 rounded-md block overflow-hidden  '
      >
        <Image
          layout='fill'
          src={`/img/sale01.jpg`}
          alt=''
          className='w-full h-full block object-cover hover:scale-105 transition-all'
        />
      </Link>
      <Link
        passHref
        href='/'
        className='w-1/3 bg-gray h-[130px] mx-8 rounded-md block overflow-hidden '
      >
        <Image
          layout='fill'
          src={`/img/sale02.jpg`}
          alt=''
          className='w-full h-full block object-cover hover:scale-105 transition-all'
        />
      </Link>
      <Link
        passHref
        href='/'
        className='w-1/3 bg-gray h-[130px] ml-8 rounded-md block overflow-hidden '
      >
        <Image
          layout='fill'
          src={`/img/sale03.jpg`}
          alt=''
          className='w-full h-full block object-cover hover:scale-105 transition-all'
        />
      </Link>
    </section>
  );
}

export default HotComponent;
