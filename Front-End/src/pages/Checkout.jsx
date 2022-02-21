import React from 'react';
import BlankCheckout from '../components/BlankCheckout';
import Breadcrumb from '../components/Breadcrumb';
// import ProductCheckout from '../components/ProductCheckout';

function Checkout() {
  return (
    <>
      <Breadcrumb />
      <section className='container pb-16 flex flex-row justify-center'>
        {/* <ProductCheckout /> */}
        <BlankCheckout />
      </section>
    </>
  );
}

export default Checkout;
