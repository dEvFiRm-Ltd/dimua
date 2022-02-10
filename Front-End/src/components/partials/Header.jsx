import React from 'react';

function Header() {
  return (
    <>
      <header className='container d-flex flex-row-reverse'>
        <ul className='features d-flex flex-row'>
          <li className='single-feature'>
            <p>
              <span className='icon'>
                <img
                  src='./vendor/images/header/shipping.svg'
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
                  src='./vendor/images/header/refund.svg'
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
                  src='./vendor/images/header/insurance.svg'
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
                  src='./vendor/images/header/genuine.svg'
                  alt=''
                  className='img-fluid'
                />{' '}
              </span>
              <span className='text'> genuine </span>
            </p>
          </li>
        </ul>
      </header>

      <section className=''>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
