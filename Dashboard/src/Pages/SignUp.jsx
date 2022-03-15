import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Copyright from '../Components/Copyright';
import { Link, useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    const signup = await fetch(
      `https://devfirm-ecommerce.herokuapp.com/auth/signup`,
      {
        method: 'POST',
        body: JSON.stringify({
          username: data.get('username'),
          email: data.get('email'),
          password: data.get('password'),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (signup.status === 201) {
      const signin = await fetch(
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
      signin.status === 200 && navigate('/dashboard');
    }
  };

  return (
    <Container maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1 }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' sx={{ mb: 8 }} variant='h5'>
          Sign up
        </Typography>
        <Box
          component='form'
          onSubmit={handleSubmit}
          method='post'
          sx={{ mt: 3 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name='username'
                required
                fullWidth
                style={{ backgroundColor: 'white' }}
                id='username'
                label='Username'
                autoFocus
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                style={{ backgroundColor: 'white' }}
                autoComplete='email'
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                style={{ backgroundColor: 'white' }}
                autoComplete='new-password'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value='allowExtraEmails' color='primary' />}
                label='I want to receive inspiration, marketing promotions and updates via email.'
              />
            </Grid>
          </Grid>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent='flex-end'>
            <Grid item>
              <Link to='/login'>Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
