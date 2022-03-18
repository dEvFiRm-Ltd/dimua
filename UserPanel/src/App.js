import { Routes, Route, useLocation } from 'react-router-dom';
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
import { useEffect } from 'react';
import SignIn from './pages/Signin';
import Success from './pages/Success';

const RouteTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <Header />
      <RouteTop />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/success' element={<Success />} />
        <Route path='flash-sale' element={<FlashSale />} />
        <Route path='coupons' element={<Coupon />} />
        <Route path='top-products' element={<TopProducts />} />
        <Route path='all-brands' element={<AllBrands />} />
        <Route path='brand/:id' element={<SingleBrand />}>
          <Route index element={<CompanyInformation />} />
          <Route index path='information' element={<CompanyInformation />} />
          <Route path='products' element={<BrandProducts />} />
          <Route path='reviews' element={<BrandReviews />} />
        </Route>
        <Route path='category/:id' element={<AllProducts />} />
        <Route path='product/:id' element={<ProductDetails />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='success' element={<OrderSuccess />} />
        <Route path='failed' element={<OrderFailed />} />
        <Route path='user' element={<Profile />}>
          <Route index element={<ProfileDashboard />} />
          <Route path='update' element={<ProfileDashboard />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
