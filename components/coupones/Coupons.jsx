import { useEffect, useState } from 'react';
import { couponData } from '../core/core';
import Modal from '../partials/Modal';
import SectionTitle from '../partials/SectionTitle';
import SingleCoupon from './SingleCoupon';

function Coupons() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setData(couponData);
    setCount(couponData.length - 1);
  }, []);
  const handleModal = (e) => {
    setModal(e);
  };

  return (
    <section className='container bg-white'>
      <SectionTitle title='Coupon Codes' slug='coupons' />
      <div className='flex flex-row justify-center '>
        {data.map((item, index) => (
          <SingleCoupon
            key={index}
            view={modal}
            setView={(e) => handleModal(e)}
            content={item}
            classes={index === 0 ? 'mr-8' : index === count ? 'ml-8' : 'mx-8'}
          />
        ))}
      </div>
      <Modal view={modal} setView={(e) => handleModal(e)} />
    </section>
  );
}

export default Coupons;
