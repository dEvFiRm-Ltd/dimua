import React from 'react';
import url from '../core/core';

function Header() {
  return (
    <>
      <header className='md:container flex flex-row-reverse'>
        <ul className='features flex flex-row'>
          <li className='single-feature'>
            <p>
              <span className='icon'>
                <img
                  src={`${url}/images/header/shipping.svg`}
                  alt=''
                  className='img-fluid'
                />{' '}
              </span>
              <span className='text'> Free ship 2km </span>
            </p>
          </li>
          <li className='single-feature'>
            <p>
              <span className='icon'>
                <img
                  src={`${url}/images/header/refund.svg`}
                  alt=''
                  className='img-fluid'
                />{' '}
              </span>
              <span className='text'> Free Refund </span>
            </p>
          </li>

          <li className='single-feature'>
            <p>
              <span className='icon'>
                <img
                  src={`${url}/images/header/insurance.svg`}
                  alt=''
                  className='img-fluid'
                />{' '}
              </span>
              <span className='text'> Return insurance </span>
            </p>
          </li>
          <li className='single-feature'>
            <p>
              <span className='icon'>
                <img
                  src={`${url}/images/header/genuine.svg`}
                  alt=''
                  className='img-fluid'
                />{' '}
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
