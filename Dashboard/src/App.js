import React, { useState, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Categories from './Components/PageComponent/Categories';
import Forms from './Components/PageComponent/Forms';
import Home from './Components/PageComponent/Home';
import Brand from './Components/PageComponent/Brand';
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import Test from './Pages/Test';
import SignUp from './Pages/SignUp';

function App() {
  const valid = false;
  const [user, setUser] = useState({});

  const getUser = async () => {
    const user = await fetch(
      `${process.env.REACT_APP_API_KEY}/auth/isloggedin`
    );
    const userData = await user.json();
    setUser(userData);
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <Routes>
      <Route path='/' exact element={<Navigate to='dashboard' />} />

      {!valid ? (
        <>
          {' '}
          <Route path='dashboard' element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path='category' element={<Categories />} />
            <Route path='form' element={<Forms />} />
            <Route path='brands' element={<Brand />} />
            <Route path='test' element={<Test />} />
          </Route>
          {/* Navigation */}
          {/* <Route path='login' exact element={<Navigate to='/dashboard' />} />
          <Route path='register' exact element={<Navigate to='/dashboard' />} /> */}
        </>
      ) : (
        <Route path='*' exact element={<Navigate to='login' />} />
      )}
      <Route path='login' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
      <Route path='*' element={<Navigate to='/404' />} />
      <Route path='404' element={<h1> 404 </h1>} />
    </Routes>
  );
}

export default App;
