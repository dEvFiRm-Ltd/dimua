// import { useEffect, useState } from 'react/cjs/react.production.min';
import { useEffect, useState } from 'react';
// import BlankCheckout from '../components/BlankCheckout';
import Breadcrumb from '../components/Breadcrumb';
import CheckoutForm from '../components/CheckoutForm';
import { topSellingData } from '../components/core/core';
import SectionTitle from '../components/partials/SectionTitle';
import ProductCheckout from '../components/ProductCheckout';
import SingleItem from '../components/SingleItem';

function Checkout() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setProduct(topSellingData);
    return () => {
      setProduct([]);
    };
  }, []);
  return (
    <>
      <Breadcrumb />
      <section className='container pb-16 flex flex-row justify-center'>
        <ProductCheckout />
        {/* <BlankCheckout /> */}
        <CheckoutForm />
      </section>
      <section className='container bg-white '>
        <SectionTitle title={'Product Suggestions'} />
        <div className='flex flex-row py-8 px-16 flex-wrap '>
          {product.map((item, index) => (
            <div className={`w-1/4 py-8 px-8`}>
              <SingleItem
                key={index}
                content={item}
                size='180px'
                showDiscount={true}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Checkout;
