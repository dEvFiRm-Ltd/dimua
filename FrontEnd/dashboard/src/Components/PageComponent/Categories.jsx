import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Copyright from '../Copyright';
import Cards from '../Cards';
import { TextField } from '@mui/material';

function Category() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth='lg' sx={{ mt: 4 }}>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item lg={3} xs={12} sm={6}>
              <TextField
                autoComplete='given-name'
                name='firstName'
                required
                fullWidth
                id='firstName'
                style={{ backgroundColor: 'white' }}
                label='First Name'
                autoFocus
              />
            </Grid>
            <Grid item lg={3}>
              <Cards title='Orders' value='120' />
            </Grid>
            <Grid item lg={3}>
              <Cards title='Customers' value='120' />
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

export default Category;
