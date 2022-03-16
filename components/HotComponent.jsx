import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function HotComponent() {
  return (
    <section className='container flex flex-row my-0 py-8 px-0'>
      <Link href='/'>
        <a className='w-1/3 bg-gray h-[130px] mr-8 rounded-md block overflow-hidden relative'>
          <Image
            layout='fill'
            src={`/img/sale01.jpg`}
            alt=''
            className='w-full h-full block object-cover hover:scale-105 transition-all'
          />
        </a>
      </Link>
      <Link passHref href='/'>
        <a className='w-1/3 bg-gray h-[130px] mx-8 rounded-md block overflow-hidden relative'>
          <Image
            layout='fill'
            src={`/img/sale02.jpg`}
            alt=''
            className='w-full h-full block object-cover hover:scale-105 transition-all'
          />
        </a>
      </Link>
      <Link href='/'>
        <a className='w-1/3 bg-gray h-[130px] ml-8 rounded-md block overflow-hidden relative '>
          <Image
            layout='fill'
            src={`/img/sale03.jpg`}
            alt=''
            className='w-full h-full block object-cover hover:scale-105 transition-all'
          />
        </a>
      </Link>
    </section>
  );
}

export default HotComponent;
