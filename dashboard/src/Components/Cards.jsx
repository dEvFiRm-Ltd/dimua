import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

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

function Cards(props) {
  return (
    <ThemeProvider theme={theme}>
      <Card sx={{ bgcolor: 'greenDark.main' }}>
        <Link to={'/'}>
          <CardContent>
            <Typography
              gutterBottom
              variant='h5'
              sx={{ textAlign: 'right' }}
              component='div'
            >
              {props.title}
            </Typography>
            <Typography
              variant='h3'
              sx={{ textAlign: 'left' }}
              color='text.secondary'
            >
              {props.value}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </ThemeProvider>
  );
}

export default Cards;
