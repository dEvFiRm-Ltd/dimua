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
  const [user, setUser] = useState({});

  const getUser = async () => {
    const user = await fetch(
      `https://devfirm-ecommerce.herokuapp.com/auth/isloggedin`
    );
    const userData = await user.json();
    setUser(userData);
  };
  useEffect(() => {
    getUser();
  }, []);
  console.log(user);

  return (
    <Routes>
      <Route path='/' exact element={<Navigate to='dashboard' />} />

      <Route path='login' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
      {user.isLoggedIn ? (
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path='category' element={<Categories />} />
          <Route path='form' element={<Forms />} />
          <Route path='brands' element={<Brand />} />
          <Route path='test' element={<Test />} />
        </Route>
      ) : (
        <Route path='*' exact element={<Navigate to='login' />} />
      )}
    </Routes>
  );
}

export default App;
