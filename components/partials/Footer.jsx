import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Footer() {
  return (
    <>
      <section className='bg-ash'>
        <div className='container flex flex-row mb-8 py-30'>
          <div className='flex flex-col w-1/4'>
            <Link passHref href='/'>
              <h5 className='leading-150 uppercase mb-16'>HELP CUSTOMERS</h5>
            </Link>

            <Link passHref href='/'>
              <p className='leading-6 text-left capitalize mb-10'>
                Shopping guide
              </p>
            </Link>
            <Link passHref href='/'>
              <p className='leading-6 text-left capitalize mb-10'>Payment</p>
            </Link>
            <Link passHref href='/'>
              <p className='leading-6 text-left capitalize mb-10'>Transport</p>
            </Link>
            <Link passHref href='/'>
              <p className='leading-6 text-left capitalize mb-10'>
                Returns &amp; Refunds
              </p>
            </Link>
            <Link passHref href='/'>
              <p className='leading-6 text-left capitalize mb-10'>
                Purchase Policy
              </p>
            </Link>
            <Link passHref href='/'>
              <p className='leading-6 text-left capitalize mb-10'>
                Warranty Policy
              </p>
            </Link>
          </div>
          <div className='flex flex-col w-1/4'>
            <h5 className='leading-150 uppercase mb-16'>Company area</h5>
            <p className='leading-6 text-left capitalize mb-10'>About Us</p>
            <p className='leading-6 text-left capitalize mb-10'>
              Privacy Policy
            </p>
            <p className='leading-6 text-left capitalize mb-10'>
              Terms &amp; Conditions
            </p>
            <p className='leading-6 text-left capitalize mb-10'>Genuine</p>
            <p className='leading-6 text-left capitalize mb-10'>
              Sales partner
            </p>
            <p className='leading-6 text-left capitalize mb-10'>Contact</p>
          </div>
          <div className='flex flex-col w-1/4'>
            <h5 className='leading-150 uppercase mb-16'>Connect with Us </h5>
            <div className='text-left flex flex-row items-center mb-10 '>
              <i className=' text-3xl fa-brands fa-facebook-square'></i>{' '}
              <p className='leading-6 capitalize ml-10 '>facebook</p>
            </div>
            <div className='text-left flex flex-row items-center mb-10 '>
              <i className=' text-3xl fa-brands fa-twitter-square'></i>{' '}
              <p className='leading-6 capitalize ml-10 '>twitter</p>
            </div>
            <div className='text-left flex flex-row items-center mb-10 '>
              <i className=' text-3xl fa-brands fa-linkedin'></i>{' '}
              <p className='leading-6 capitalize ml-10 '>linkedIn</p>
            </div>
            <div className='text-left flex flex-row items-center mb-10 '>
              <i className=' text-3xl fa-brands fa-instagram-square'></i>{' '}
              <p className='leading-6 capitalize ml-10 '>instagram</p>
            </div>
          </div>
          <div className='flex flex-col w-1/4'>
            <h5 className='leading-150 uppercase mb-16'>Downloads</h5>
            <a
              href='!'
              target='_blank'
              className='mb-10 w-[140px] h-[42px] relative '
            >
              <Image
                layout='fill'
                src={`/img/play-store.jpg`}
                alt=''
                className=''
              />
            </a>
            <a
              href='!'
              target='_blank'
              className=' w-[140px] h-[42px] relative '
            >
              <Image
                layout='fill'
                src={`/img/apple-store.jpg`}
                alt=''
                className=''
              />
            </a>
          </div>
        </div>
      </section>
      <footer className='bg-[#687481] '>
        <section className='container flex justify-center items-center py-20'>
          <p className='text-center text-white text-lg'>Developed By DevFiRm</p>
          <span className='hidden'>
            Photo by{' '}
            <a href='https://unsplash.com/@giorgiotrovato?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Giorgio Trovato
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/products?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            Photo by{' '}
            <a href='https://unsplash.com/@jacintachristos?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Jacinta Christos
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/products?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            Photo by{' '}
            <a href='https://unsplash.com/@reubenmansell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Reuben Mansell
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/products?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            Photo by{' '}
            <a href='https://unsplash.com/@revolt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              REVOLT
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/products?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            Photo by{' '}
            <a href='https://unsplash.com/@revolt?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              REVOLT
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/products?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            Photo by{' '}
            <a href='https://unsplash.com/@cdx2?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              C D-X
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/products?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            Photo by{' '}
            <a href='https://unsplash.com/@arturorey?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Arturo Rey
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/shopping?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            Photo by{' '}
            <a href='https://unsplash.com/@freestocks?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              freestocks
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/shopping?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
            Photo by{' '}
            <a href='https://unsplash.com/@charlesdeluvio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              charlesdeluvio
            </a>{' '}
            on{' '}
            <a href='https://unsplash.com/s/photos/shopping?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>
              Unsplash
            </a>
          </span>
        </section>
      </footer>
    </>
  );
}

export default Footer;
