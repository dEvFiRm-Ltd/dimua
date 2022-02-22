import React from 'react';
import url from '../core/core';

function Footer() {
  return (
    <>
      <section className='container flex flex-row mb-8 bg-ash py-30'>
        <div className='flex flex-col w-1/4'>
          <h5 className='leading-150 uppercase mb-16'>HELP CUSTOMERS</h5>
          <p className='leading-6 text-left capitalize mb-10'>Shopping guide</p>
          <p className='leading-6 text-left capitalize mb-10'>Payment</p>
          <p className='leading-6 text-left capitalize mb-10'>Transport</p>
          <p className='leading-6 text-left capitalize mb-10'>
            Returns &amp; Refunds
          </p>
          <p className='leading-6 text-left capitalize mb-10'>
            Purchase Policy
          </p>
          <p className='leading-6 text-left capitalize mb-10'>
            Warranty Policy
          </p>
        </div>
        <div className='flex flex-col w-1/4'>
          <h5 className='leading-150 uppercase mb-16'>Company area</h5>
          <p className='leading-6 text-left capitalize mb-10'>About Us</p>
          <p className='leading-6 text-left capitalize mb-10'>Privacy Policy</p>
          <p className='leading-6 text-left capitalize mb-10'>
            Terms &amp; Conditions
          </p>
          <p className='leading-6 text-left capitalize mb-10'>Genuine</p>
          <p className='leading-6 text-left capitalize mb-10'>Sales partner</p>
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
          <a href='!' target='_blank' className='mb-10'>
            <img src={`${url}/img/play-store.jpg`} alt='' className='' />
          </a>
          <a href='!' target='_blank' className=''>
            <img src={`${url}/img/apple-store.jpg`} alt='' className='' />
          </a>
        </div>
      </section>
      <footer className='container flex justify-center items-center py-20 bg-[#687481] '>
        <p className='text-center text-white text-lg'>Developed By DevFiRm</p>
      </footer>
    </>
  );
}

export default Footer;
