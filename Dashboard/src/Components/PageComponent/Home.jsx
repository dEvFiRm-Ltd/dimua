import Box from '@mui/material/Box';
import Chart from '../Chart';
import Deposits from '../Deposits';
import Orders from '../Orders';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Copyright from '../Copyright';
import Cards from '../Cards';
import Products from '../Products';

function Home() {
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
      <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: 'space-evenly',
            justifyItems: 'center',
            alignContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <Grid item lg={3}>
            <Cards title='Products' value='120' />
          </Grid>
          <Grid item lg={3}>
            <Cards title='Orders' value='120' />
          </Grid>
          <Grid item lg={3}>
            <Cards title='Customers' value='120' />
          </Grid>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240,
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Orders />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Products />
            </Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}

export default Home;
