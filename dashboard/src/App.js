import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Dashboard from './Pages/Dashboard';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    black: {
      main: '#0D0D0D',
    },
    white: {
      primary: '#F2F2F2',
    },
    cream: {
      main: '#736555',
    },
    green: {
      main: '#5FD98A',
    },
    greenDark: {
      main: '#5EBF80',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path='/' exact element={<Navigate to='dashboard' />} />
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Home />} />
        </Route>
        <Route path='login' element={<SignIn />} />
        <Route path='register' element={<SignUp />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
