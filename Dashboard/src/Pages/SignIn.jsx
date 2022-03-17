import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import Copyright from '../Components/Copyright';
import axios from 'axios';

const theme = createTheme();

export default function SignIn() {
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
    const user = await fetch(
      'https://devfirm-ecommerce.herokuapp.com/auth/local',
      {
        method: 'POST',
        body: JSON.stringify({
          username: data.get('email'),
          password: data.get('password'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    user.status === 200 && navigate('/dashboard');
  };

  // React.useEffect(() => {

  //  console.log( window.Cookies.get());
  // },[])

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

  const loginWithGoogle = () => {
    // eslint-disable-next-line no-unused-vars
    
    const newWindow = window.open('http://localhost:5000/auth/google', '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
    if (newWindow) {
     let timer = setInterval(() => {
        if (newWindow.closed) {
          console.log("Yay we're authenticated");
          fetchAuthUser();
          if (timer) clearInterval(timer);
        }
      }, 500);
    }

  };


  return (
    <ThemeProvider theme={theme}>
      <Grid container component='main' sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign in
            </Typography>

            <Box
              component='form'
              method='post'
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin='normal'
                // required
                fullWidth
                id='email'
                label='Email or Password'
                name='email'
                type={'text'}
                autoFocus
              />
              <TextField
                margin='normal'
                // required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
              />
              <FormControlLabel
                control={<Checkbox value='remember' color='primary' />}
                label='Remember me'
              />
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>


              <Grid container>
                <Grid item xs>
                  <Link to='/' variant='body2'>
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/register' variant='body2'>
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
          <button onClick={() => loginWithGoogle()}>log in with Google</button>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
