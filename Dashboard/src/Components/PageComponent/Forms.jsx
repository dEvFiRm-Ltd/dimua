import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Copyright from '../Copyright';
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  Rating,
  Slider,
  Switch,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { top100Films } from '../dummy';
import Dropzone from '../Dropzone';

export default function Forms() {
  const [checked, setChecked] = useState([false, false]);
  const [value, setValue] = useState(2);

  // State for Image

  const [newUserInfo, setNewUserInfo] = useState({
    images: [],
  });

  const updateUploadedFiles = (files) => {
    setNewUserInfo({ ...newUserInfo, images: files });
  };

  const parentCheck = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const childCheck = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const childCheck2 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // Styling

  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth='lg' sx={{ mt: 4 }}>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item lg={4} xs={12} sm={6}>
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
            <Grid item lg={5}>
              <FormControlLabel
                label='Parent'
                control={
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={parentCheck}
                  />
                }
              />
              <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
                <FormControlLabel
                  label='Child 1'
                  control={
                    <Checkbox checked={checked[0]} onChange={childCheck} />
                  }
                />
                <FormControlLabel
                  label='Child 2'
                  control={
                    <Checkbox checked={checked[1]} onChange={childCheck2} />
                  }
                />
              </Box>
            </Grid>
            <Grid item lg={3}>
              <FormGroup>
                <FormControlLabel control={<Checkbox />} label='Label' />
              </FormGroup>
            </Grid>
            <Grid item lg={3}>
              <Autocomplete
                disablePortal
                id='combo-box-demo'
                options={top100Films}
                sx={{ width: '100%' }}
                renderInput={(params) => (
                  <TextField {...params} label='Movie' />
                )}
              />
            </Grid>
            <Grid item lg={4}>
              <FormControl>
                <FormLabel id='demo-row-radio-buttons-group-label'>
                  Gender
                </FormLabel>
                <RadioGroup
                  row
                  aria-labelledby='demo-row-radio-buttons-group-label'
                  name='row-radio-buttons-group'
                >
                  <FormControlLabel
                    value='female'
                    control={<Radio />}
                    label='Female'
                  />
                  <FormControlLabel
                    value='male'
                    control={<Radio />}
                    label='Male'
                  />
                  <FormControlLabel
                    value='other'
                    control={<Radio />}
                    label='Other'
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item lg={4}>
              <Typography component='legend'>Controlled</Typography>
              <Rating
                name='simple-controlled'
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Grid>
            <Grid item lg={4}>
              <Slider
                defaultValue={50}
                aria-label='Default'
                valueLabelDisplay='auto'
              />
            </Grid>
            <Grid item lg={4}>
              <FormGroup>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label='Label'
                />
                <FormControlLabel
                  disabled
                  control={<Switch />}
                  label='Disabled'
                />
              </FormGroup>
            </Grid>
            <Grid container sx={{ mt: 2 }} justifyContent='center'>
              <Grid item lg={6}>
                <Dropzone updateFilesCb={updateUploadedFiles} multiple />
              </Grid>
            </Grid>
            <Grid container sx={{ mt: 2 }} justifyContent='center'>
              <Grid item lg={1}>
                <Button sx={{ mx: 1 }} variant='contained'>
                  Submit
                </Button>
              </Grid>
              <Grid item lg={1}>
                <Button sx={{ mx: 1 }} variant='outlined'>
                  Cancelled
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}
