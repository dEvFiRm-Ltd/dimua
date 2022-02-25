import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' exact element={<Navigate to='dashboard' />} />
        <Route path='dashboard' element={<h1>Home </h1>}>
          <Route path='home' element={<h1>Dashboard</h1>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
