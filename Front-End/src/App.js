import { Routes, Route } from 'react-router-dom';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Navigation from './components/partials/Navigation';
import FlashSale from './pages/FlashSale';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/flash-sale' element={<FlashSale />} />
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
