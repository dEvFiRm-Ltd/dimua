import { Navigate, Route, Routes } from 'react-router-dom';
import Categories from './Components/PageComponent/Categories';
import Forms from './Components/PageComponent/Forms';
import Home from './Components/PageComponent/Home';
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <Routes>
      <Route path='/' exact element={<Navigate to='dashboard' />} />
      <Route path='*' element={<Navigate to='dashboard' />} />
      <Route path='dashboard' element={<Dashboard />}>
        <Route index element={<Home />} />
        <Route path='category' element={<Categories />} />
        <Route path='form' element={<Forms />} />
      </Route>
      <Route path='login' element={<SignIn />} />
      <Route path='register' element={<SignUp />} />
    </Routes>
  );
}

export default App;
