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
import axios from 'axios';
import Success from './Pages/Success';

function App() {
  const valid = false;
  const [user, setUser] = useState({});

  const fetchAuthUser = async () => {
    const response = await axios
      .get("http://localhost:5000/auth/isloggedin", { withCredentials: true })
      .catch((err) => {
        console.log("Not properly authenticated");
        // dispatch(setIsAuthenticated(false));
        // dispatch(setAuthUser(null));
        // history.push("/login/error");
      });

    if (response && response.data) {
      console.log("User: ", response.data);
      // dispatch(setIsAuthenticated(true));
      // dispatch(setAuthUser(response.data));
      // history.push("/welcome");
    }
  };
  useEffect(() => {
    fetchAuthUser();
  }, []);
  console.log(user)
  // getUser();

  return (
    <Routes>
      <Route path='/' exact element={<Navigate to='dashboard' />} />

      {user ? (
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
          <Route path='login' exact element={<Navigate to='/dashboard' />} />
          <Route path='register' exact element={<Navigate to='/dashboard' />} />
        </>
      ) : (
        <Route path='*' exact element={<Navigate to='login' />} />
      )}
      <Route path='login' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
      <Route path='success' element={<Success />} />
      <Route path='*' element={<Navigate to='/404' />} />
      <Route path='404' element={<h1> 404 </h1>} />
    </Routes>
  );
}

export default App;
