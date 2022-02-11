import React from 'react';
import url from '../core/core';

function Header() {
  return (
    <>
      <header className='container py-8 flex flex-row-reverse'>
        <ul className='features flex flex-row'>
          <li className='relative py-8 px-10'>
            <h6>
              <span className='pr-8 h-[15px] inline-block '>
                <img
                  className='h-full mt-[4px]'
                  src={`${url}/images/header/shipping.svg`}
                  alt=''
                />
              </span>
              <span className='text'> Free ship 2km </span>
            </h6>
            <span className='absolute w-4 h-4 rounded-[50%] top-1/2 right-[-2px] bg-[#000000] ' />
          </li>
          <li className='relative py-8 px-10'>
            <h6>
              <span className='pr-8 h-[15px] inline-block '>
                <img
                  className='h-full mt-[4px]'
                  src={`${url}/images/header/refund.svg`}
                  alt=''
                />
              </span>
              <span className='text'> Free Refund </span>
            </h6>
            <span className='absolute w-4 h-4 rounded-[50%] top-1/2 right-[-2px] bg-[#000000] ' />
          </li>
          <li className='relative py-8 px-10'>
            <h6>
              <span className='pr-8 h-[15px] inline-block '>
                <img
                  className='h-full mt-[4px]'
                  src={`${url}/images/header/insurance.svg`}
                  alt=''
                />
              </span>
              <span className='text'> Return insurance </span>
            </h6>
            <span className='absolute w-4 h-4 rounded-[50%] top-1/2 right-[-2px] bg-[#000000] ' />
          </li>
          <li className='relative py-8 px-10'>
            <h6>
              <span className='pr-8 h-[15px] inline-block '>
                <img
                  className='h-full mt-[4px]'
                  src={`${url}/images/header/genuine.svg`}
                  alt=''
                />
              </span>
              <span className='text'> genuine </span>
            </h6>
          </li>
        </ul>
      </header>

      <section className='navigation'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-12'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
