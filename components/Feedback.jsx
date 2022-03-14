import React from 'react';
import Image from 'next/image';

function Feedback() {
  return (
    <div className='p-24 bg-white flex flex-row justify-between '>
      <div className='flex flex-row '>
        <div className='w-[48px] h-[48px] mr-16 rounded-[50%] overflow-hidden relative '>
          <Image
            layout='fill'
            src={`/img/profile.png`}
            alt=''
            className=' w-full h-full '
          />
        </div>
        <div className='flex flex-col '>
          <h3>Yifei Chen</h3>
          <h5 className='font-normal'>Hanoi Vietnam | 20-09-2021 19:15</h5>
        </div>
      </div>
      <div className='flex flex-col w-[65%] '>
        <div className='mb-20'>
          <h5 className='font-normal'>
            The velvet fabric is quite ok, it&apos;s not thick, it&apos;s not
            that thin, the color is pretty, the pants are over the ankle (about
            90cm) there is a little mistake but I reported it to the shop and
            the only point is that the pants are quite big and the pants are
            high waisted. The shop also gives me a gift card and a thank you
            letter...
          </h5>
          <button
            type='button'
            className='text-green text-md font-normal mr-auto'
          >
            See More
          </button>
        </div>
        <div className='flex flex-row '>
          <div className='w-60 h-60 mr-10 '>
            <Image
              layout='fill'
              src={`/img/item01.jpg`}
              alt=''
              className=' w-full h-full '
            />
          </div>
          <div className='w-60 h-60 mr-10 '>
            <Image
              layout='fill'
              src={`/img/item01.jpg`}
              alt=''
              className=' w-full h-full '
            />
          </div>
          <div className='w-60 h-60 mr-10 '>
            <Image
              layout='fill'
              src={`/img/item01.jpg`}
              alt=''
              className=' w-full h-full '
            />
          </div>
          <div className='w-60 h-60 mr-10 '>
            <Image
              layout='fill'
              src={`/img/item01.jpg`}
              alt=''
              className=' w-full h-full '
            />
          </div>
          <div className='w-60 h-60 mr-10 '>
            <Image
              layout='fill'
              src={`/img/item01.jpg`}
              alt=''
              className=' w-full h-full '
            />
          </div>
          <div className='w-60 h-60 mr-10 '>
            <Image
              layout='fill'
              src={`/img/item01.jpg`}
              alt=''
              className=' w-full h-full '
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
