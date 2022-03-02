import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function Cards(props) {
  return (
    <Card sx={{ bgcolor: 'default' }}>
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
  );
}

export default Cards;
