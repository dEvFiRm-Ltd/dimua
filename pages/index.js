import Head from 'next/head';
import Category from '../components/Category';
import Coupons from '../components/coupones/Coupons';
import FeaturedBrand from '../components/FeaturedBrand';
import FlashSale from '../components/FlashSale';
import Hero from '../components/Hero';
import HotComponent from '../components/HotComponent';
import PromoProducts from '../components/PromoProducts';
import Suggetions from '../components/Suggetions';
import TopSelling from '../components/TopSelling';

export default function Home() {
  return (
    <>
      <Hero />
      <HotComponent />
      <Category />
      <FlashSale />
      <Coupons />
      <TopSelling />
      {/* <Link to={'/'} className=' container my-8 p-0 '>
        <img
          src={`${url}/img/advertise.jpg`}
          alt=''
          className='w-full object-contain'
        />
      </Link> */}
      <FeaturedBrand />
      <PromoProducts />
      <Suggetions />
    </>
  );
}
