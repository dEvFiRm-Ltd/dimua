import { Routes, Route } from 'react-router-dom';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Navigation from './components/partials/Navigation';
import AllBrands from './pages/AllBrands';
import Checkout from './pages/Checkout';
import CompanyInformation from './pages/BrandInformation';
import Coupon from './pages/Coupon';
import FlashSale from './pages/FlashSale';
import Home from './pages/Home';
import AllProducts from './pages/AllProducts';
import SingleBrand from './pages/SingleBrand';
import TopProducts from './pages/TopProducts';
import BrandProducts from './pages/BrandProducts';
import BrandReviews from './pages/BrandReviews';
import OrderSuccess from './pages/OrderSuccess';
import OrderFailed from './pages/OrderFailed';
import Profile from './pages/Profile';
import ProfileDashboard from './pages/ProfileDashboard';
import ProductDetails from './pages/ProductDetails';
import Playground from './pages/Playground';

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
        <Route path='brand' element={<SingleBrand />}>
          <Route index element={<CompanyInformation />} />
          <Route index path='information' element={<CompanyInformation />} />
          <Route path='products' element={<BrandProducts />} />
          <Route path='reviews' element={<BrandReviews />} />
        </Route>
        <Route path='products' element={<AllProducts />} />
        <Route path='product-details' element={<ProductDetails />} />
        <Route path='test' element={<Playground />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='success' element={<OrderSuccess />} />
        <Route path='failed' element={<OrderFailed />} />
        <Route path='user' element={<Profile />}>
          <Route index element={<ProfileDashboard />} />
          <Route path='update' element={<ProfileDashboard />} />
        </Route>
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
