import React from 'react';
import url from '../core/core';

function Header() {
  return (
    <>
      <header className='container flex flex-row-reverse'>
        <ul className='features flex flex-row'>
          <li className='relative py-8 px-10'>
            <p>
              <span className='pr-8 h-[15px] inline-block '>
                <img
                  className='h-full'
                  src={`${url}/images/header/shipping.svg`}
                  alt=''
                />
              </span>
              <span className='text'> Free ship 2km </span>
            </p>
          </li>
          <li className='relative py-8 px-10'>
            <p>
              <span className='pr-8 h-[15px] inline-block '>
                <img
                  className='h-full'
                  src={`${url}/images/header/refund.svg`}
                  alt=''
                />
              </span>
              <span className='text'> Free Refund </span>
            </p>
          </li>
          <li className='relative py-8 px-10'>
            <p>
              <span className='pr-8 h-[15px] inline-block '>
                <img
                  className='h-full'
                  src={`${url}/images/header/insurance.svg`}
                  alt=''
                />
              </span>
              <span className='text'> Return insurance </span>
            </p>
          </li>
          <li className='relative py-8 px-10'>
            <p>
              <span className='pr-8 h-[15px] inline-block '>
                <img
                  className='h-full'
                  src={`${url}/images/header/genuine.svg`}
                  alt=''
                />
              </span>
              <span className='text'> genuine </span>
            </p>
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
