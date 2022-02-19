import { Routes, Route } from 'react-router-dom';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Navigation from './components/partials/Navigation';
import AllBrands from './pages/AllBrands';
import Coupon from './pages/Coupon';
import FlashSale from './pages/FlashSale';
import Home from './pages/Home';
import SingleBrand from './pages/SingleBrand';
import TopProducts from './pages/TopProducts';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='flash-sale' element={<FlashSale />} />
        <Route path='coupons' element={<Coupon />} />
        <Route path='top-products' element={<TopProducts />} />
        <Route path='all-brands' element={<AllBrands />} />
        <Route path='brand' element={<SingleBrand />} />
        {/* <Route path='/test' element={<Hamburger />} /> */}
      </Routes>

      <Footer />

      {/* Blank */}
      {/* <section className=''>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'></div>
          </div>
        </div>
      </section> */}
    </>
  );
}

export default App;
