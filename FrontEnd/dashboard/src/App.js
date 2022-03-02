import { Navigate, Route, Routes } from 'react-router-dom';
import Categories from './Components/PageComponent/Categories';
import Home from './Components/PageComponent/Home';
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Navigate to='dashboard' />} />
      <Route path='dashboard' element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route index element={<Categories />} />
      </Route>
      <Route path='login' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
    </Routes>
  );
}

export default App;
